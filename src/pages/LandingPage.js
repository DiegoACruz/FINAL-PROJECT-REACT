// Importamos React para poder crear el componente
import React from "react";

// Importamos Link para navegar a otras páginas
import { Link } from "react-router-dom";


// Componente de la página principal (Landing Page)
function LandingPage() {

  return (

    // Contenedor principal de la landing page
    <div className="landing-container">

      {/* Capa oscura sobre la imagen */}
      <div className="landing-overlay">

        {/* Contenido central */}
        <div className="landing-content">

          {/* Título principal */}
          <h1>Paradise Nursery</h1>

          {/* Texto descriptivo */}
          <p>
            Discover beautiful plants that bring life and freshness
            to your home.
          </p>

          {/* Botón que lleva a la página de productos */}
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

// Exportamos el componente para poder usarlo en App.js
export default LandingPage;