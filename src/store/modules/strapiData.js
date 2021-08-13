import * as StrapiApiService from '../../services/StrapiApiService.js'

export default {
   namespaced: true,
   state () {
     return {
       news: null,
       areNewsLoading: false,
     }
   },
   mutations: {
      SET_NEWS (state, news) {
        state.news = news
      },
      SET_ARE_NEWS_LOADING (state, bool) {
        state.areNewsLoading = bool
      },
    },
   actions: {
      async fetchAllNews ({ commit }) {
         commit('SET_ARE_NEWS_LOADING', true)
         try {
            const allNews = await StrapiApiService.getAllNews()
            commit('SET_NEWS', allNews)
            commit('SET_ARE_NEWS_LOADING', false)
         } catch (e) {
            commit('SET_ARE_NEWS_LOADING', false)
            throw e
         }
      }
   }
}