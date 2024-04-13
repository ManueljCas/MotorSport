<template>
    <div class="login-container">
      <div class="login-card">
        <div class="login-image-section">
          <!-- La imagen de fondo se define en el CSS -->
        </div>
        <div class="login-form-section">
          <h2>Inicio de sesión</h2>
          <p>Por favor ingrese los siguientes datos</p>
          <form @submit.prevent="login">
            <div class="input-group">
              <input type="email" id="email" placeholder="Correo electrónico" required>
            </div>
            <div class="input-group">
              <input type="password" id="password" placeholder="Contraseña" required>
            </div>
            <button type="submit">Iniciar sesión</button>
          </form>
          <p class="signup-prompt">¿No tienes una cuenta? <router-link to="/register">Regístrate aquí</router-link></p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Login',
    methods: {
      login() {
        // Método para manejar la lógica de inicio de sesión
      }
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: rgb(43, 39, 39);/* Fondo semi-transparente para oscurecer la imagen detrás */
  }
  
  .login-card {
    display: flex;
    width: 70%; /* Ancho del card */
    max-width: 800px; /* Máximo ancho del card */
    height: 70%; /* Altura del card */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    overflow: hidden;
  }
  
  .login-image-section {
    background: url('@/assets/img/login.jpeg') no-repeat center center;
  background-size: cover;
  flex: 1; /* O cualquier proporción que necesites para el lado de la imagen */
  border-top-left-radius: 20px; /* Redondear las esquinas izquierdas superiores */
  border-bottom-left-radius: 20px; /* Redondear las esquinas izquierdas inferiores */
  background-attachment: scroll;
  }
  
  .login-form-section {
    flex: 1;
    padding: 2em;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #555454; /* Fondo blanco para la sección del formulario */
  }
  
  .input-group {
    margin-bottom: 1em;
  }
  
  input {
    width: 100%;
    padding: 1em;
    margin-top: 0.5em;
    border: 1px solid #cccccc;
    border-radius: 5px;
  }
  
  button {
    color: black;
    width: 100%;
    padding: 1em;
    border: none;
    border-radius: 5px;
    background-color: #e3dfdf;
    font-weight: bold;
    margin-top: 1em;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #555555;
  }
  
  .signup-prompt {
    text-align: center;
    margin-top: 1em;
  }
  
  .signup-prompt a {
    color: #333333;
    text-decoration: none;
  }
  
  .signup-prompt a:hover {
    text-decoration: underline;
  }
  </style>