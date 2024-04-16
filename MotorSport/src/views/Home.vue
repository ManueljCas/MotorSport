<template>
  <div class="home">
    <!-- Barra de navegación simulada -->
    <NavBarComponent />
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
          <img src="@/assets/img/tesla.jpeg" alt="Descripción">
        </div>
        <div class="content-text">
          <p>Tesla, la compañía de vehículos eléctricos y tecnología energética, revoluciona la industria automotriz con sus innovaciones en baterías, conducción autónoma y energía solar, liderando el camino hacia un futuro sostenible..</p>
        </div>
      </section>

      <!-- Bloque inferior -->
      <section class="content-block reverse">
        <div class="content-image">
          <img src="@/assets/img/hondaa.jpeg" alt="Descripción">
        </div>
        <div class="content-text">
          <p>Honda, el gigante japonés del automóvil, ofrece una amplia gama de vehículos confiables y eficientes, desde automóviles compactos hasta SUVs y motocicletas de alto rendimiento, combinando calidad, tecnología y diseño innovador.</p>
        </div>
      </section>
    </div>


    <!-- Pie de página -->
    <FooterComponent/>

  </div>
</template>

<script>
import NavBarComponent from '@/components/shared/NavBarComponent.vue';
import FooterComponent from '@/components/shared/FooterComponent.vue';

export default {
  name: 'Home',
  components: {
    NavBarComponent,
    FooterComponent
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
  font-family:Georgia, 'Times New Roman', Times, serif;
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

</style>