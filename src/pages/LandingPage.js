import React from "react";
import { Link } from "react-router-dom";

// Página principal de la tienda
function LandingPage() {

  return (

    <div className="landing-container">

      {/* Overlay para oscurecer imagen */}
      <div className="landing-overlay">

        {/* Contenido principal */}
        <div className="landing-content">

          <h1>Paradise Nursery</h1>

          <p>
            Discover beautiful plants that bring life and freshness
            to your home.
          </p>

          {/* Botón para entrar a la tienda */}
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

export default LandingPage;