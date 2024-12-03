import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/seasons',
      name: 'seasons',
      component: () => import('../views/SeasonsView.vue'),
    },
    {
      path: '/constructors',
      name: 'constructors',
      component: () => import('../views/ConstructorsView.vue'),
    },
    {
      path: '/drivers',
      name: 'drivers',
      component: () => import('../views/DriversView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
