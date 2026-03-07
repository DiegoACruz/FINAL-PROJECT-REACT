// Importamos React para crear el componente
import React from "react";

// Importamos Link para navegar a la página de productos
import { Link } from "react-router-dom";


// Creamos el componente LandingPage
function LandingPage() {

  return (

    // Contenedor principal de la portada
    <div className="landing-container">

      {/* Capa oscura encima de la imagen */}
      <div className="landing-overlay">

        {/* Contenido central */}
        <div className="landing-content">

          {/* Nombre de la tienda */}
          <h1>Paradise Nursery</h1>

          {/* Texto descriptivo */}
          <p>

            Bring nature into your home.

            Discover beautiful indoor plants, succulents, and flowering
            plants carefully selected to brighten your living space.

          </p>

          {/* Botón que lleva a la tienda */}
          <Link to="/products">

            <button className="start-btn">

              Shop Plants

            </button>

          </Link>

        </div>

      </div>

    </div>

  );

}


// Exportamos el componente
export default LandingPage;