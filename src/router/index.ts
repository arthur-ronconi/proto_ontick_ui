import Buttons from '@/pages/Buttons.vue';
import Inputs from '@/pages/Inputs.vue';
import Showcase from '@/pages/Showcase.vue';
import Todo from '@/pages/Todo.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'Showcase',
      path: '/',
      component: Showcase,
      children: [
        {
          name: 'Botões',
          path: 'buttons',
          component: Buttons,
        },
        {
          name: 'Inputs',
          path: 'inputs',
          component: Inputs,
        },
        {
          name: 'Todo',
          path: 'todo',
          component: Todo,
        },
      ],
      redirect: '/buttons',
    },
  ],
});

export default router;
