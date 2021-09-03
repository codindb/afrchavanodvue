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
       kidsActivities: null,
       areKidsActivitiesLoading: false,
       singleKidsActivity: null,
       bottomHeaderInfo: null,
       isBottomHeaderInfoLoading: false,
       kidsCamp: null,
       isKidsCampLoading: false, 
       mission: null,
       isMissionLoading: false, 
       members: null,
       areMembersLoading: false,
       office: null,
       managers: null,
     }
   },
   mutations: {
      // NEWS
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

      // ACTIVITIES
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

      // WORKSHOPS
      SET_WORKSHOPS (state, workshops) {
        state.workshops = workshops
      },
      SET_ARE_WORKSHOPS_LOADING (state, bool) {
        state.areWorkshopsLoading = bool
      },
      SET_SINGLE_WORKSHOP (state, singleWorkshop) {
         state.singleWorkshop = singleWorkshop
      },
      CLEAR_SINGLE_WORKSHOP (state) {
         state.singleWorkshop = null
      },

      // KIDS ACTIVITIES
      SET_KIDS_ACTIVITIES (state, kidsActivities) {
        state.kidsActivities = kidsActivities
      },
      SET_ARE_KIDS_ACTIVITIES_LOADING (state, bool) {
        state.areKidsActivitiesLoading = bool
      },
      SET_SINGLE_KIDS_ACTIVITY (state, singleKidsActivity) {
         state.singleKidsActivity = singleKidsActivity
      },
      CLEAR_SINGLE_KIDS_ACTIVITY (state) {
         state.singleKidsActivity = null
      },

      // BOTTOM HEADER
      SET_BOTTOMHEADER_INFO (state, bottomHeaderInfo) {
        state.bottomHeaderInfo = bottomHeaderInfo
      },
      SET_IS_BOTTOMHEADER_INFO_LOADING (state, bool) {
        state.isBottomHeaderInfoLoading = bool
      },
      CLEAR_BOTTOMHEADER_INFO (state) {
         state.bottomHeaderInfo = null
      },

      // KIDS CAMP
      SET_KIDSCAMP (state, kidsCamp) {
         state.kidsCamp = kidsCamp
       },
       SET_IS_KIDSCAMP_LOADING (state, bool) {
         state.isKidsCampLoading = bool
       },
       CLEAR_KIDSCAMP (state) {
          state.kidsCamp = null
       },
       
      // MISSION
      SET_MISSION (state, mission) {
         state.mission = mission
       },
       SET_IS_MISSION_LOADING (state, bool) {
         state.isMissionLoading = bool
       },
       CLEAR_MISSION (state) {
          state.mission = null
       },
       
      // MEMBERS
      SET_MEMBERS (state, members) {
         state.members = members
       },
       SET_ARE_MEMBERS_LOADING (state, bool) {
         state.areMembersLoading = bool
       },
       CLEAR_MEMBERS (state) {
          state.members = null
       },
       SET_OFFICE (state, office) {
          state.office = office
       },
       SET_MANAGERS (state, managers) {
          state.managers = managers
       },
    },
   actions: {

      // NEWS
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

      // ACTIVITIES
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
      },

      // WORKSHOPS
      async fetchAllWorkshops ({ commit }) {
         commit('SET_ARE_WORKSHOPS_LOADING', true)
         try {
            const allWorshops = await ApiService.getAllWorkshops()
            commit('SET_WORKSHOPS', allWorshops)
            commit('SET_ARE_WORKSHOPS_LOADING', false)
         } catch (e) {
            commit('SET_ARE_WORKSHOPS_LOADING', false)
            throw e
         }
      },
      async fetchSingleWorkshop ({ commit}, id) {
         commit('CLEAR_SINGLE_WORKSHOP')
         commit('SET_ARE_WORKSHOPS_LOADING', true)
         try {
            const singleWorkshop = await ApiService.getSingleWorkshop(id.id)
            commit('SET_SINGLE_WORKSHOP', singleWorkshop)
            commit('SET_ARE_WORKSHOPS_LOADING', false)
         } catch (e) {
            commit('SET_ARE_WORKSHOPS_LOADING', false)
            throw e
         }
      },

      // KIDS ACTIVITIES
      async fetchAllKidsActivities ({ commit }) {
         commit('SET_ARE_KIDS_ACTIVITIES_LOADING', true)
         try {
            const allKidsActivities = await ApiService.getAllKidsActivities()
            commit('SET_KIDS_ACTIVITIES', allKidsActivities)
            commit('SET_ARE_KIDS_ACTIVITIES_LOADING', false)
         } catch (e) {
            commit('SET_ARE_KIDS_ACTIVITIES_LOADING', false)
            throw e
         }
      },
      async fetchSingleKidsActivity ({ commit}, id) {
         commit('CLEAR_SINGLE_KIDS_ACTIVITY')
         commit('SET_ARE_KIDS_ACTIVITIES_LOADING', true)
         try {
            const singleKidsActivity = await ApiService.getSingleKidsActivity(id.id)
            commit('SET_SINGLE_KIDS_ACTIVITY', singleKidsActivity)
            commit('SET_ARE_KIDS_ACTIVITIES_LOADING', false)
         } catch (e) {
            commit('SET_ARE_KIDS_ACTIVITIES_LOADING', false)
            throw e
         }
      },

      // BOTTOM HEADER
      async fetchBottomHeaderInfo ({ commit }) {
         commit('CLEAR_BOTTOMHEADER_INFO')
         commit('SET_IS_BOTTOMHEADER_INFO_LOADING', true)
         try {
            const bottomHeaderInfo = await ApiService.getBottomHeaderInfo()
            commit('SET_BOTTOMHEADER_INFO', bottomHeaderInfo)
            commit('SET_IS_BOTTOMHEADER_INFO_LOADING', false)
         } catch (e) {
            commit('SET_IS_BOTTOMHEADER_INFO_LOADING', false)
            throw e
         }
      },
      
      // KIDS CAMP
      async fetchKidsCamp ({ commit }) {
         commit('CLEAR_KIDSCAMP')
         commit('SET_IS_KIDSCAMP_LOADING', true)
         try {
            const kidsCamp = await ApiService.getKidsCamp()
            commit('SET_KIDSCAMP', kidsCamp)
            commit('SET_IS_KIDSCAMP_LOADING', false)
         } catch (e) {
            commit('SET_IS_KIDSCAMP_LOADING', false)
            throw e
         }
      },
      
      // MISSION
      async fetchMission ({ commit }) {
         commit('SET_IS_MISSION_LOADING', true)
         try {
            const mission = await ApiService.getMission()
            commit('SET_MISSION', mission)
            commit('SET_IS_MISSION_LOADING', false)
         } catch (e) {
            commit('SET_IS_MISSION_LOADING', false)
            throw e
         }
      },
      
      // MEMBERS
      async fetchMembers ({ commit }) {
         commit('SET_ARE_MEMBERS_LOADING', true)
         try {
            const members = await ApiService.getAllMembers()
            commit('SET_MEMBERS', members)
            commit('SET_ARE_MEMBERS_LOADING', false)
         } catch (e) {
            commit('SET_ARE_MEMBERS_LOADING', false)
            throw e
         }
      },
      async fetchOffice ({ commit }) {
         commit('SET_ARE_MEMBERS_LOADING', true)
         try {
            const office = await ApiService.getOffice()
            commit('SET_OFFICE', office)
            commit('SET_ARE_MEMBERS_LOADING', false)
         } catch (e) {
            commit('SET_ARE_MEMBERS_LOADING', false)
            throw e
         }
      },
      async fetchManagers ({ commit }) {
         commit('SET_ARE_MEMBERS_LOADING', true)
         try {
            const managers = await ApiService.getManagers()
            commit('SET_MANAGERS', managers)
            commit('SET_ARE_MEMBERS_LOADING', false)
         } catch (e) {
            commit('SET_ARE_MEMBERS_LOADING', false)
            throw e
         }
      },
   }
}