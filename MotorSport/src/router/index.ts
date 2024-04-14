// router/index.ts

import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue'; 
import Register from '@/views/Register.vue'; 
import AboutUs from '@/views/AboutUs.vue'; 
import Blog from '@/views/Blog.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/aboutus',
    name: 'AboutUs',
    component: AboutUs,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
  },
  // ... otras rutas
];

const router = createRouter({
  // Usa import.meta.env.VITE_BASE_URL en lugar de process.env.BASE_URL
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
});

export default router;