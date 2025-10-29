import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// 🔹 Importamos los estilos globales de Tailwind
// Asegurate de tener el archivo "main.css" en la raíz del proyecto
// con el contenido: @import "tailwindcss";
import '../main.css'

// 🔹 Creamos la instancia principal de Vue
const app = createApp(App)

// 🔹 Agregamos Pinia (gestión de estado global)
app.use(createPinia())

// 🔹 Agregamos Vue Router (ruteo entre páginas)
app.use(router)

// 🔹 Montamos la aplicación en el div con id="app" (ver index.html)
app.mount('#app')
