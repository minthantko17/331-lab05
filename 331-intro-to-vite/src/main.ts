// import './assets/main.css'

import './assets/style.css'
import { createApp } from 'vue'
import { inject } from '@vercel/analytics'
inject()
import { createPinia } from 'pinia'
import 'nprogress/nprogress.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
