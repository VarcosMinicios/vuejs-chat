import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { Quasar, Dialog } from 'quasar'
import langPt from 'quasar/lang/pt-BR'

import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-symbols-outlined/material-symbols-outlined.css'
import '@quasar/extras/material-symbols-rounded/material-symbols-rounded.css'

import 'quasar/src/css/index.sass'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Quasar, {
  plugins: {
    Dialog
  },
  lang: langPt
})

app.mount('#app')
