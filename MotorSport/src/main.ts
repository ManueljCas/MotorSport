// main.ts

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/base.css'; // Agrega esta línea para importar tus estilos globales

const app = createApp(App);

app.use(router);

app.mount('#app');