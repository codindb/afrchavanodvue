export default {
   namespaced: true,
   state () {
     return {
       newsDialogVisibility: false,
       newsIndex: null,
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
      }
    },
   actions: {

      // DIALOG VISIBILITY
      setNewsDialogVisibility ({ commit }, boolean) {
         commit('SET_NEWS_DIALOG_VISIBILITY', boolean)
      },
      
      // NEWS INDEX
      setNewsIndex ({ commit }, index) {
         commit('SET_NEWS_INDEX', index)
      },
   }
}