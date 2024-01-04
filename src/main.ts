import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios'

import { Quasar, Dialog, Notify } from 'quasar'
import langPt from 'quasar/lang/pt-BR'

import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-symbols-outlined/material-symbols-outlined.css'

import 'quasar/src/css/index.sass'

axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Quasar, {
  plugins: {
    Dialog,
    Notify
  },
  lang: langPt
})

app.mount('#app')
