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
      name: 'games',
      component: () => import('../views/Games.vue')
    },
    {
      path: '/game/:id',
      name: 'game',
      component: () => import('../components/Game.vue')
    }
  ]
})

export default router
