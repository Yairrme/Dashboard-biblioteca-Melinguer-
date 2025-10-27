import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import '../main.css' // Asegurate de tener main.css en la raíz con @import "tailwindcss"

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
