import { createStore, createLogger } from 'vuex'
import ApiDataModule from './modules/apiData.js'
import NotificationsModule from './modules/notifications.js'

const store = createStore({
  modules: {
    apiData: ApiDataModule,
    notifications: NotificationsModule
  },
  // plugins: import.meta.env.MODE !== 'production' ? [createLogger()] : []
})

export default store
