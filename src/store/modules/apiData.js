import * as ApiService from '../../services/ApiService.js'

export default {
   namespaced: true,
   state () {
     return {
       news: null,
       areNewsLoading: false,
       singleNews: null,
       activities: null,
       areActivitiesLoading: false,
       singleActivity: null,
       workshops: null,
       areWorkshopsLoading: false,
       singleWorkshop: null, 
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
      },
      CLEAR_SINGLE_NEWS (state) {
         state.singleNews = null
      },
      SET_ACTIVITIES (state, activities) {
        state.activities = activities
      },
      SET_ARE_ACTIVITIES_LOADING (state, bool) {
        state.areActivitiesLoading = bool
      },
      SET_SINGLE_ACTIVITY (state, singleActivity) {
         state.singleActivity = singleActivity
      },
      CLEAR_SINGLE_ACTIVITY (state) {
         state.singleActivity = null
      },
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
      async fetchSingleNews ({ commit}, id) {
         commit('CLEAR_SINGLE_NEWS')
         commit('SET_ARE_NEWS_LOADING', true)
         try {
            const singleNews = await ApiService.getSingleNews(id.id)
            commit('SET_SINGLE_NEWS', singleNews)
            commit('SET_ARE_NEWS_LOADING', false)
         } catch (e) {
            commit('SET_ARE_NEWS_LOADING', false)
            throw e
         }
      },
      async fetchAllActivities ({ commit }) {
         commit('SET_ARE_ACTIVITIES_LOADING', true)
         try {
            const allActivities = await ApiService.getAllActivities()
            commit('SET_ACTIVITIES', allActivities)
            commit('SET_ARE_ACTIVITIES_LOADING', false)
         } catch (e) {
            commit('SET_ARE_ACTIVITIES_LOADING', false)
            throw e
         }
      },
      async fetchSingleActivity ({ commit}, id) {
         commit('CLEAR_SINGLE_ACTIVITY')
         commit('SET_ARE_ACTIVITIES_LOADING', true)
         try {
            const singleActivity = await ApiService.getSingleActivity(id.id)
            commit('SET_SINGLE_ACTIVITY', singleActivity)
            commit('SET_ARE_ACTIVITIES_LOADING', false)
         } catch (e) {
            commit('SET_ARE_ACTIVITIES_LOADING', false)
            throw e
         }
      }
   }
}