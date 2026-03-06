/* ============================= */
/* LANDING PAGE                  */
/* ============================= */

/* Contenedor principal de la página de inicio */
.landing-container {

  /* Ocupa toda la altura de la pantalla */
  height: 100vh;

  /* Imagen de fondo de la tienda */
  background-image: url("https://images.unsplash.com/photo-1466692476868-aef1dfb1e735");

  /* Hace que la imagen cubra toda la pantalla */
  background-size: cover;

  /* Centra la imagen */
  background-position: center;

  /* Evita que la imagen se repita */
  background-repeat: no-repeat;

}

/* Capa oscura sobre la imagen para que el texto sea legible */
.landing-overlay {

  height: 100%;

  /* Oscurece ligeramente la imagen */
  background-color: rgba(0,0,0,0.45);

  display: flex;

  justify-content: center;

  align-items: center;

}

/* Contenido central de la landing */
.landing-content {

  text-align: center;

  color: white;

  max-width: 500px;

}

/* Título principal */
.landing-content h1 {

  font-size: 48px;

  margin-bottom: 20px;

}

/* Texto descriptivo */
.landing-content p {

  font-size: 18px;

  margin-bottom: 30px;

}

/* Botón para entrar a la tienda */
.start-btn {

  font-size: 16px;

  padding: 12px 25px;

  background-color: #43a047;

}

/* Efecto hover del botón */
.start-btn:hover {

  background-color: #2e7d32;

}