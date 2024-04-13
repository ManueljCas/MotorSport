// router/index.ts

import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // ... otras rutas
];

const router = createRouter({
  // Usa import.meta.env.VITE_BASE_URL en lugar de process.env.BASE_URL
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
});

export default router;
