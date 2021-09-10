export default {
   namespaced: true,
   state () {
     return {
       newsDialogVisibility: false,
       newsIndex: null,
       drawer: false,
       activityIndex: null,
       workshopIndex: null,
       kidsActivityIndex: null,
     }
   },
   mutations: {
      // NEWS DIALOG VISIBILITY
      SET_NEWS_DIALOG_VISIBILITY (state, boolean) {
        state.newsDialogVisibility = boolean
      },

      // NEWS INDEX
      SET_NEWS_INDEX (state, index) {
         state.newsIndex = index
      },
      
      // ACTIVITY INDEX
      SET_ACTIVITY_INDEX (state, index) {
         state.activityIndex = index
      },
      
      // WORKSHOP INDEX
      SET_WORKSHOP_INDEX (state, index) {
         state.workshopIndex = index
      },
      
      // KIDS ACTIVITY INDEX
      SET_KIDS_ACTIVITY_INDEX (state, index) {
         state.kidsActivityIndex = index
      },

      // DRAWER
      SET_DRAWER (state, boolean) {
         state.drawer = boolean
      },
    },
   actions: {

      // NEWS DIALOG VISIBILITY
      setNewsDialogVisibility ({ commit }, boolean) {
         commit('SET_NEWS_DIALOG_VISIBILITY', boolean)
      },
      
      // NEWS INDEX
      setNewsIndex ({ commit }, index) {
         commit('SET_NEWS_INDEX', index)
      },

      // ACTIVITY INDEX
      setActivityIndex ({ commit }, index) {
         commit('SET_ACTIVITY_INDEX', index)
      },

      // DRAWER
      setDrawer ({ commit }, boolean) {
         commit('SET_DRAWER', boolean)
      },
   }
}