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
                <img :src="card.image" :alt="modalTitle" class="modal-image">
                <div class="modal-body">
                    <h2 class="modal-title">{{ modalTitle }}</h2>
                    <p class="modal-description">{{ modalDescription }}</p>
                    <button class="modal-close-btn" @click="closeModal">×</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavBarComponent from '@/components/shared/NavBarComponent.vue';
import FooterComponent from '@/components/shared/FooterComponent.vue';

export default {
    name: 'Blog',
    components: {
        NavBarComponent,
        FooterComponent
    },
    data() {
        return {
            cards: [
                { id: 1, title: 'Jeep Gladiator 6x6', description: 'Descripción del Jeep Gladiator 6x6.', image: '../assets/img/blog/JeepGladiator.jpeg' },
                { id: 2, title: 'Jeep Gladiator 6x6', description: 'Descripción del Jeep Gladiator 6x6.', image: '../assets/img/blog/JeepGladiator.jpeg' },
                // Asegúrate de que la ruta a la imagen es correcta y accesible
            ],
            modalActive: false,
            modalTitle: '',
            modalDescription: '',
            modalImage: '',
            comments: [] // Aquí almacenarías los comentarios de cada post
        };
    },
    methods: {
        openModal(card) {
            // console.log(new URL(${card.image}, import.meta.url).href);
            this.modalTitle = card.title;
            this.modalDescription = card.description;
            // this.modalImage = new URL(${card.image}, import.meta.url).href;
            this.modalActive = true;
        },
        closeModal() {
            this.modalActive = false;
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