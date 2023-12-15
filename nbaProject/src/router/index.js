import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/players',
      name: 'home',
      component: HomeView
    },
    {
      path: '/',
      name: 'jogos',
      component: () => import('../views/Games.vue')
    }
  ]
})

export default router
