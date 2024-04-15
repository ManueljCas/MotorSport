<template>
    <div class="home">
      <NavBarComponent />
      <section class="blog-cards-container">
        <div class="blog-card" v-for="card in cards" :key="card.id" @click="openModal(card)">
          <img :src="card.image" :alt="card.title" class="blog-card-image">
          <div class="blog-card-content">
            <h3>{{ card.title }}</h3>
            <p>{{ card.description }}</p>
          </div>
        </div>
      </section>
      <FooterComponent />
      <div v-if="modalActive" class="modal-overlay" @click.self="closeModal">
        <div class="modal">
          <img :src="modalImage" alt="Modal Image" class="modal-image">
          <div class="modal-body">
            <h2 class="modal-title">{{ modalTitle }}</h2>
            <p class="modal-description">{{ modalDescription }}</p>
            <div v-if="user" class="comment-input-area">
    <textarea v-model="newComment" placeholder="Escribe un comentario..."></textarea>
    <button @click="addComment" class="comment-button">Comentar</button>
  </div>
            <div v-else>
              <p>Debes iniciar sesión para comentar.</p>
            </div>
            <div class="comments-section">
              <div v-for="comment in currentComments" :key="comment.id" class="comment">
                <span class="comment-author">{{ comment.author }}:</span>
                <span class="comment-content">{{ comment.content }}</span>
              </div>
            </div>
            <button class="modal-close-btn" @click="closeModal">×</button>
          </div>
        </div>
      </div>
    </div>
  </template>
<script>
import { db, auth } from '../services/firebase/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, addDoc, query, where, getDocs, serverTimestamp } from 'firebase/firestore';
import NavBarComponent from '../components/shared/NavBarComponent.vue';
import FooterComponent from '../components/shared/FooterComponent.vue';
// En tu script, importa las imágenes.
// Asegúrate de que las rutas sean correctas y accesibles desde tu archivo .vue.
import JeepGladiatorImage from '@/assets/img/blog/JeepGladiator.jpeg';
import Gixxer250Image from '@/assets/img/blog/gixxer250.jpeg';
import dominar from '@/assets/img/blog/dominar.jpeg';
import skyline from '@/assets/img/blog/skyline.jpeg';
// Importa las demás imágenes que necesites.

export default {
  name: 'Blog',
  components: {
    NavBarComponent,
    FooterComponent
  },
  data() {
    return {
        cards: [
                { id: 1, title: 'Jeep Gladiator 6x6', description: 'Descripción del Jeep Gladiator 6x6.', image: JeepGladiatorImage },
                // Repite para cada tarjeta con la imagen correspondiente importada.
                { id: 2, title: 'Gixxer 250', description: 'Descripción de la Gixxer 250.', image: Gixxer250Image },
               
                { id: 3, title: 'Gixxer 250', description: 'Descripción de la Gixxer 250.', image: dominar },
                { id: 4, title: 'Gixxer 250', description: 'Descripción de la Gixxer 250.', image: Gixxer250Image },
               
            ],

      modalActive: false,
      modalTitle: '',
      modalDescription: '',
      modalImage: '',
      modalCardId: null, // ID de la tarjeta actual del modal
      comments: [], // Todos los comentarios de Firestore
      newComment: '', // Para vincular al input de nuevo comentario
      user: null, // Representa al usuario actual
      currentComments: [] // Comentarios del post actual
    };
  },
  created() {
    // Monitorear el estado de autenticación del usuario
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  },
  methods: {
    openModal(card) {
      this.modalTitle = card.title;
      this.modalDescription = card.description;
      this.modalImage = card.image;
      this.modalCardId = card.id;
      this.modalActive = true;
      this.fetchComments(card.id); // Trae los comentarios al abrir el modal
    },
    async addComment() {
      if (!this.user) return; // Si no hay usuario, no hacer nada
      if (!this.newComment.trim()) return; // Si no hay comentario, no hacer nada

      try {
        await addDoc(collection(db, "posts", String(this.modalCardId), "comments"), {
          author: this.user.displayName || this.user.email, // O el campo que uses para el nombre del usuario
          content: this.newComment,
          createdAt: serverTimestamp()
        });
        this.newComment = ''; // Limpiar el campo de nuevo comentario
        this.fetchComments(this.modalCardId); // Actualizar comentarios
      } catch (error) {
        console.error("Error adding comment: ", error);
        // Manejar el error (mostrar mensaje al usuario, etc.)
      }
    },
    async fetchComments(cardId) {
      const commentsQuery = query(collection(db, "posts", String(cardId), "comments"));
      const querySnapshot = await getDocs(commentsQuery);
      this.currentComments = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    },
    closeModal() {
      this.modalActive = false;
      this.currentComments = []; // Limpiar comentarios al cerrar modal
    }
  }
};
</script>


<style scoped>
.home {
    background-color: #8c8484;
    position: relative;
}

.blog-cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2rem;
}

.blog-card {
    width: 450px;
    margin: 1rem;
    cursor: pointer;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
}

.blog-card:hover {
    transform: translateY(-5px);
}

.blog-card-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.blog-card-content {
    padding: 1rem;
    background: white;
}

h3 {
    color: #333;
    margin: 0;
}

p {
    color: #555;
    font-size: 0.9rem;
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    background-color: white;
    width: 100%;
    max-width: 600px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
}

.modal-image {
    width: 100%;
    height: auto;
    display: block;
}

.modal-body {
    padding: 20px;
}

.modal-title {
    margin-top: 0;
    /* Estilos para el título del modal */
}

.modal-description {
    /* Estilos para la descripción del modal */
}

.modal-close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
}

.comments-section {
  background: #f7f7f7;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
  overflow-y: auto; /* Para el scroll */
  max-height: 50vh; /* Se ajusta a un máximo del 50% de la altura de la pantalla */
  min-height: 100px; /* Altura mínima para que no se vea muy pequeño al inicio */
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.comment {
  border-bottom: 1px solid #e0e0e0; /* Línea divisora entre comentarios */
  padding: 0.5rem 0;
  display: flex; /* Acomoda autor y contenido en línea */
  align-items: flex-start; /* Alineación vertical al inicio para que se vea bien con múltiples líneas de texto */
  margin-bottom: 0.5rem; /* Espacio entre comentarios */
}

.comment:last-child {
  border-bottom: none; /* Evita la línea divisora en el último comentario */
}

.comment-author {
  font-weight: 600; /* Fuente en negrita para el autor */
  color: #333; /* Color más oscuro para destacar */
  margin-right: 0.5rem; /* Espacio entre autor y contenido */
  flex-shrink: 0; /* Evita que el nombre del autor se comprima */
}

.comment-content {
  color: #555; /* Color para el contenido */
  word-break: break-word; /* Asegura que el texto largo se divida correctamente */
  flex-grow: 1; /* Permite que el contenido ocupe el espacio restante */
}
.comment-input {
  width: calc(100% - 2rem); /* Calcula el ancho teniendo en cuenta el padding */
  padding: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem; /* Espacio antes y después del input */
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem; /* Tamaño de fuente adecuado para la entrada */
  box-sizing: border-box; /* Asegura que el padding no añada al ancho total */
}
.comment-input-area {
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
}
textarea {
  width: 100%; /* Ocupa todo el ancho disponible */
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  resize: vertical;
  min-height: 50px; /* Altura mínima */
  box-sizing: border-box; /* Para incluir el padding y el borde en el ancho total */
}
.comment-button {
  padding: 0.5rem 1rem;
  background-color: #4CAF50;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 0.5rem; /* Espacio entre el textarea y el botón */
}

button {
  padding: 0.5rem 1rem;
  background-color: #4CAF50;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 0.5rem; /* Margen superior para separar del input */
  margin-bottom: 1rem; /* Margen inferior para separar de los comentarios */
}

button:hover {
  background-color: #45a049; /* Oscurece el botón al pasar el mouse */
}


/* Asegúrate de que tu modal sea responsivo */
@media (max-width: 768px) {
    .modal {
        width: 90%;
    }
}

@media (max-width: 768px) {
    .blog-cards-container {
        flex-direction: column;
        align-items: center;
    }

    .blog-card {
        width: 80%;
    }
}
</style>