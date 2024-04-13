<template>
    <div class="home">
      <!-- Barra de navegación simulada -->
      <NavBarComponent />
      <!-- Contenedor del nombre de la empresa -->

  
    </div>
  </template>
  
  <script>
  import NavBarComponent from '@/components/shared/NavBarComponent.vue';
  
  export default {
    name: 'AboutUs',
    components: {
      NavBarComponent // Registra el componente
    },
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
  };
  </script>
  
  <style scoped>
  .home {
    /* Estilos para el contenedor principal */
    background-color: #8c8484;
  }
  
  </style>