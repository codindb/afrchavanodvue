import { createApp } from 'vue'

import router from './router'
import store from './store'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

 // To parse markdown from api (rich text fields) into html
 import marked from 'marked'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(ElementPlus)
app.provide('marked', marked) // registering marked globally

app.mount('#app')
