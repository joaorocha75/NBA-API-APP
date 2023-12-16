import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/players',
      name: 'players',
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
    },
    {
      path: '/teams',
      name: 'teams',
      component: () => import('../views/Teams.vue')
    },
    {
      path: '/team/:id',
      name: 'team',
      component: () => import('../components/Team.vue')
    },
  ]
})

export default router
