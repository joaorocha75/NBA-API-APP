import { createRouter, createWebHistory } from 'vue-router';
import NewsListView from '../views/NewsListView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'games',
      component: () => import('../views/Games.vue'),
    },
    {
      path: '/game/:id',
      name: 'game',
      component: () => import('../components/Game.vue'),
    },
    {
      path: '/teams',
      name: 'teams',
      component: () => import('../views/Teams.vue'),
    },
    {
      path: '/team/:id',
      name: 'team',
      component: () => import('../components/Team.vue'),
    },
    {
      path: '/news',
      name: 'news',
      component: NewsListView,
    },
    {
      path: '/news/:id',
      name: 'newsItem',
      component: () => import('../components/NewsList.vue'),
    },
  ],
});

export default router;
