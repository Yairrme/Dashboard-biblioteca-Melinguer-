import { createRouter, createWebHistory } from 'vue-router'

// 🔹 Importamos las vistas principales del proyecto
import DashboardPage from '../pages/DashboardPage.vue'
import LibrosList from '../pages/LibrosList.vue'
import LibrosForm from '../pages/LibrosForm.vue'

// 🔹 Definición de rutas de la aplicación
const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: DashboardPage, // Página principal
  },
  {
    path: '/libros',
    name: 'LibrosList',
    component: LibrosList, // Lista de libros
  },
  {
    path: '/libros/nuevo',
    name: 'LibrosForm',
    component: LibrosForm, // Formulario para agregar libros
  },
]

// 🔹 Creación del enrutador con historial HTML5
const router = createRouter({
  history: createWebHistory(),
  routes,
})

// 🔹 Exportación del router para usarlo en main.ts
export default router
