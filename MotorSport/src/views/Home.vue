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
    <!-- Contenedor del nombre de la empresa -->
    <div class="company-name-bar">MOTORSPORT</div>

    <!-- Área principal de Motorsport con imagen destacada -->
    <section class="motorsport-highlight">
      <!-- La imagen se establecerá en el CSS -->
    </section>

    <!-- Carrusel de marcas -->
    <section class="brand-carousel">
      <div class="arrow left-arrow">←</div>
      <div class="brand-image-container">
        <img :src="nissan" alt="Nissan" class="brand-image" />
        <img :src="honda" alt="Honda" class="brand-image" />
        <img :src="citroen" alt="Citroën" class="brand-image" />
      </div>
      <div class="arrow right-arrow">→</div>
    </section>

    <!-- Bloques de contenido con imagen y texto -->
    <div class="content-blocks">
      <!-- Bloque superior -->
      <section class="content-block">
        <div class="content-image">
          <img src="@/assets/img/hero.jpeg" alt="Descripción">
        </div>
        <div class="content-text">
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
      </section>

      <!-- Bloque inferior -->
      <section class="content-block reverse">
        <div class="content-image">
          <img src="@/assets/img/hero.jpeg" alt="Descripción">
        </div>
        <div class="content-text">
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
      </section>
    </div>


    <!-- Pie de página -->
    <div class="footer">
      <div class="footer-top">
        <!-- Contact Info -->
        <div class="contact-info">
          <span class="icon"><i class="fas fa-phone"></i> 010-001-012-025-2</span>
          <span class="icon"><i class="fas fa-envelope"></i> motorsport@gmail.com</span>
        </div>
        <!-- Social Icons -->
        <div class="social-icons">
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-whatsapp"></i>
        </div>
      </div>
      <!-- Divider -->
      <hr class="footer-divider">
      <!-- Legal Links -->
      <div class="footer-bottom">
        <div class="legal-links">
          Aspectos legales | Políticas de privacidad | Seguridad | Administrar cookies
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Home',
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

.company-name-bar {
  width: 100%;
  /* Abarca todo el ancho */
  height: 10rem;
  color: black;
  text-align: center;
  padding: 10px 0;
  /* Espaciado arriba y abajo */
  font-size: 3em;
  /* Tamaño del texto */
}

.motorsport-highlight {
  background: url('@/assets/img/hero.jpeg') no-repeat center center;
  background-size: cover;
  height: 500px;
  margin-bottom: 12rem;
  /* Ajusta la altura deseada */
  /* No se necesita posición relativa aquí a menos que vayas a posicionar otros elementos dentro de la sección de forma absoluta */
}


/* Estilos cards carruce */

.brand-carousel {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  padding-bottom: 5rem;
  /* Ajuste según sea necesario */
}

.arrow {
  font-size: 24px;
  cursor: pointer;
  user-select: none;
}


.brand-image-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.brand-image {
  width: 15rem;
  /* O un ancho específico */
  height: auto;
  /* Para mantener la proporción */
  margin: 0 15px;
  /* Espacio entre imágenes */
  border-radius: 20px;
  /* Añade bordes redondeados aquí */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  /* Opcional: sombra para dar profundidad */
  overflow: hidden;
  /* Asegura que las imágenes también se corten a la forma redondeada */
}

.brand-image-placeholder {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  /* Ancho de cada imagen de marca */
  height: 150px;
  /* Altura de cada imagen de marca */
  margin: 0 10px;
  /* Espacio entre las imágenes de marcas */
  font-size: 20px;
  /* Ajusta al tamaño necesario */
  color: white;
  /* Color del texto dentro del placeholder */
}

/* Estilos específicos para cada marca, si quieres agregar algún estilo particular */
.nissan {
  background-color: black;
  /* Fondo para Nissan */
}

.honda {
  background-color: red;
  /* Fondo para Honda */
}

.citroen {
  background-color: black;
  /* Fondo para Citroën */
}

.content-blocks {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  /* Espacio entre los bloques de contenido */
}

.content-block {
  display: flex;
  align-items: center;
  gap: 2rem;
  /* Espacio entre la imagen y el texto */
  margin: 2rem;
  /* Margen alrededor del bloque para evitar que esté demasiado pegado al borde de la ventana o a otros elementos */
}

.content-block.reverse {
  flex-direction: row-reverse;
  /* Invierte el orden para el bloque inferior */
}

.content-image {
  flex: 1;
  padding: 0 2rem;
  /* Relleno horizontal para separar la imagen del texto */
}

.content-image img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  /* Esquinas redondeadas para las imágenes */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  /* Sombra para dar profundidad a las imágenes */
}

.content-text {
  flex: 1;
  padding: 2rem;
  /* Relleno interno para el texto */
}


/* footer */


.footer {
  width: 100%;
  padding-top: 5rem;

}

.footer-top,
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  /* Añade un poco de espacio alrededor del contenido */
}

.contact-info {
  display: flex;
  gap: 1rem;
  /* Espacio entre los elementos de contacto */
  color: white;
}

.social-icons {
  font-size: 1.5rem;
  /* Tamaño de los íconos de las redes sociales */
  display: flex;
  gap: 1rem;
  /* Espacio entre los íconos */
}

.footer-divider {
  border: 0;
  border-top: 1px solid #fff;
  /* Línea blanca para dividir las secciones */
  margin: 0.5rem 0;
}

.legal-links {
  text-align: center;
  padding: 0.5rem 0;
  color: #fff;
  /* Color de texto de los enlaces legales */
}

/* Iconos de FontAwesome */
.icon i,
.social-icons i {
  color: #fff;
  /* Color de los íconos */
}

/* Añade estilos para hover y focus según necesites */
.icon:hover,
.social-icons i:hover {
  color: #ddd;
  /* Cambio de color al pasar el mouse */
}
</style>