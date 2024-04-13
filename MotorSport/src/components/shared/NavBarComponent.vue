<template>
    <nav class="navbar">
      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/modelos">Modelos</router-link></li>
        <li><router-link to="/nosotros">Nosotros</router-link></li>
        <li><router-link to="/blog">Blog</router-link></li>
      </ul>
      <div class="circle-menu" @click="toggleMenu">☰</div>
      <div v-if="showMenu" class="menu-options">
        <ul>
          <li><router-link to="/login">Iniciar sesión</router-link></li>
          <li><router-link to="/register">Registrarse</router-link></li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'NavBarComponent',
    data() {
      return {
        showMenu: false,
        nissan: new URL('@/assets/img/nissan.jpeg', import.meta.url).href,
        honda: new URL('@/assets/img/honda.jpeg', import.meta.url).href,
        citroen: new URL('@/assets/img/citroen.jpeg', import.meta.url).href,
      };
    },
    methods: {
      toggleMenu() {
        this.showMenu = !this.showMenu;
      },
      goToVideo() {
        // Lógica para ir al vídeo
        window.open('URL_del_video', '_blank');
      },
    },
  
  })
  </script>
  
  <style scoped>
  
  /* Estilos para la barra de navegación */
  .navbar {
    background-color: #333;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    align-items: center;
  }
  .nav-links {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 1rem;
  }
  
  .nav-links li a {
    color: white;
    text-decoration: none;
  }
  
  .nav-links li a:hover {
    text-decoration: underline;
  }
  
  /* Estilo para el círculo que es un menú */
  .circle-menu {
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  
  /* Estilos para las opciones del menú */
  .menu-options {
    position: absolute;
    right: 1rem;
    top: 3rem;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    z-index: 100;
  }
  
  .menu-options ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  .menu-options li a {
    color: #333;
    text-decoration: none;
    padding: 0.5rem 1rem;
    display: block;
  }
  
  .menu-options li a:hover {
    background-color: #eee;
  }
  </style>