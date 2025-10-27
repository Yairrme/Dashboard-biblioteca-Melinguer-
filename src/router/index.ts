import { createRouter, createWebHistory } from 'vue-router'
import DashboardPage from '../pages/DashboardPage.vue'
import LibrosList from '../pages/LibrosList.vue'
import LibrosForm from '../pages/LibrosForm.vue'

const routes = [
  { path: '/', component: DashboardPage },
  {
    path: '/libros',
    component: LibrosList,
  },
  {
    path: '/libros/nuevo',
    component: LibrosForm,
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
