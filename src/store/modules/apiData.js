import * as ApiService from '../../services/ApiService.js'

export default {
   namespaced: true,
   state () {
     return {
       news: null,
       areNewsLoading: false,
       singleNews: null,
     }
   },
   mutations: {
      SET_NEWS (state, news) {
        state.news = news
      },
      SET_ARE_NEWS_LOADING (state, bool) {
        state.areNewsLoading = bool
      },
      SET_SINGLE_NEWS (state, singleNews) {
         state.singleNews = singleNews
      }
    },
   actions: {
      async fetchAllNews ({ commit }) {
         commit('SET_ARE_NEWS_LOADING', true)
         try {
            const allNews = await ApiService.getAllNews()
            commit('SET_NEWS', allNews)
            commit('SET_ARE_NEWS_LOADING', false)
         } catch (e) {
            commit('SET_ARE_NEWS_LOADING', false)
            throw e
         }
      },
      async fetchSingleNews ({ commit }, id) {
         commit('SET_ARE_NEWS_LOADING', true)
         try {
            const singleNews = await ApiService.getSingleNews(id.id)
            commit('SET_SINGLE_NEWS', singleNews)
            commit('SET_ARE_NEWS_LOADING', false)
         } catch (e) {
            commit('SET_ARE_NEWS_LOADING', false)
            throw e
         }
      }
   }
}