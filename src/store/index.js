import { createStore, createLogger } from 'vuex'
import StrapiDataModule from './modules/strapiData.js'
import NotificationsModule from './modules/notifications.js'

const store = createStore({
  modules: {
    strapiData: StrapiDataModule,
    notifications: NotificationsModule
  },
  // plugins: import.meta.env.MODE !== 'production' ? [createLogger()] : []
})

export default store
