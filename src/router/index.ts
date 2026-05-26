import Dashboard from '@/pages/Dashboard.vue';
import Greeting from '@/pages/Greeting.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'Greeting',
      path: '/',
      component: Greeting,
    },
    {
      name: 'Dashboard',
      path: '/dashboard',
      component: Dashboard,
    },
  ],
});

export default router;
