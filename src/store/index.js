import { createStore, createLogger } from 'vuex'
import ApiDataModule from './modules/apiData.js'
import DataModule from './modules/data.js'
import NotificationsModule from './modules/notifications.js'

const store = createStore({
  modules: {
    apiData: ApiDataModule,
    data: DataModule,
    notifications: NotificationsModule
  },
  // plugins: import.meta.env.MODE !== 'production' ? [createLogger()] : []
})

export default store
