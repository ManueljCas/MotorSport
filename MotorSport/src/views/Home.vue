<template>
  <div class="home">
    <!-- Barra de navegación simulada -->
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

    <!-- Área principal de Motorsport con imagen destacada -->
    <section class="motorsport-highlight">
      <div class="image-placeholder">Imagen Destacada</div>
    </section>

    <!-- Carrusel de marcas -->
    <section class="brand-carousel">
      <div class="brand-image-placeholder">Logo 1</div>
      <div class="brand-image-placeholder">Logo 2</div>
      <div class="brand-image-placeholder">Logo 3</div>
      <!-- Agrega más placeholders de logos según sea necesario -->
    </section>

    <!-- Área de contenido y vídeo -->
    <section class="content-area">
      <div class="video-placeholder">Video</div>
      <div class="article">
        <p>Lorem ipsum...</p>
        <!-- Agregar más contenido del artículo aquí -->
      </div>
    </section>

    <!-- Sección de anuncios o publicaciones -->
    <section class="ads">
      <div class="ad-placeholder">Anuncio 1</div>
      <div class="ad-placeholder">Anuncio 2</div>
      <!-- Agrega más placeholders de anuncios según sea necesario -->
    </section>

    <!-- Pie de página -->
    <footer class="footer">
      <p>Aspectos legales | Políticas de privacidad | Seguridad | Administrar cookies</p>
      <!-- Agrega más contenido de pie de página si es necesario -->
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<style scoped>
.home {
  /* Estilos para el contenedor principal */
}

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

/* Estilo para las imágenes y logos con fondo negro */
.image-placeholder,
.brand-image-placeholder,
.video-placeholder,
.ad-placeholder {
  background-color: black;
  color: white;
  text-align: center;
  line-height: 100px; /* Ajusta esto según el tamaño que desees */
  margin: 10px;
  height: 100px; /* Ajusta la altura */
}

/* Estilos para la sección de marca */
.brand-carousel {
  display: flex;
  justify-content: center;
  /* Añadir más estilos según sea necesario */
}

/* Estilos para el contenido y vídeo */
.content-area {
  display: flex;
  /* Añadir más estilos según sea necesario */
}

.article {
  
}

/* Estilos para la sección de anuncios */
.ads {
  /* Tu estilo aquí */
}

.footer {
  
}
</style>