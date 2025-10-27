import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const DashboardPage = () => import('@/pages/DashboardPage.vue')
const LibrosList = () => import('@/pages/LibrosList.vue')
const LibrosForm = () => import('@/pages/LibrosForm.vue')

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: DashboardPage },
  {
    path: '/libros',
    component: { template: '<router-view />' }, // contenedor para anidadas
    children: [
      { path: '', name: 'libros.list', component: LibrosList },
      { path: 'nuevo', name: 'libros.new', component: LibrosForm },
    ],
  },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
