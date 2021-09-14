export default {
   namespaced: true,
   state () {
     return {
       newsDialogVisibility: false,
       newsIndex: null,
       drawer: false,
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

      // DRAWER
      setDrawer ({ commit }, boolean) {
         commit('SET_DRAWER', boolean)
      },
   }
}