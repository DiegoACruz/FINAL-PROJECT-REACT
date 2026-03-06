// Importamos React para poder crear el componente
import React from "react";

// Creamos el componente AboutUs
function AboutUs() {

  // Este componente muestra información sobre la empresa Paradise Nursery
  return (

    // Contenedor principal de la página
    <div
      className="aboutus-container"
      style={{
        padding: "2rem",      // Espacio interno
        textAlign: "center",  // Centrar el texto
        maxWidth: "900px",    // Ancho máximo del contenido
        margin: "auto"        // Centrar el contenedor
      }}
    >

      {/* Título principal */}
      <h1>About Paradise Nursery</h1>

      {/* Primer párrafo de descripción */}
      <p>
        Welcome to <strong>Paradise Nursery</strong>, an online plant shop
        dedicated to bringing the beauty of nature into your home.
        Our mission is to make it easy for people to discover and
        enjoy plants that improve their living spaces.
      </p>

      {/* Segundo párrafo */}
      <p>
        We specialize in a variety of plants including indoor plants,
        succulents, and flowering plants. Each plant in our store is
        carefully selected to ensure quality, beauty, and long-lasting
        enjoyment for our customers.
      </p>

      {/* Tercer párrafo */}
      <p>
        At Paradise Nursery we believe that plants do more than
        decorate a room. They help create a healthier environment,
        reduce stress, and bring a sense of calm and happiness to
        everyday life.
      </p>

    </div>
  );
}

// Exportamos el componente para poder usarlo en otras partes de la aplicación
export default AboutUs;