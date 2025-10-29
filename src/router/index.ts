// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import DashboardPage from '@/pages/DashboardPage.vue'
import LibrosList from '../pages/LibrosList.vue'
import LibrosForm from '../pages/LibrosForm.vue'

const routes = [
  { path: '/', component: DashboardPage },
  {
    path: '/libros',
    component: LibrosList,
    children: [
      { path: 'nuevo', component: LibrosForm }, // anidado correctamente
    ],
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
