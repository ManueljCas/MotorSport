// main.ts

import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Asegúrate de que la ruta de importación sea correcta

const app = createApp(App);

app.use(router); // Utiliza Vue Router

app.mount('#app');