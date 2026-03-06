// Importamos React
import React from "react";

// Importamos Link para navegar entre páginas sin recargar
import { Link } from "react-router-dom";

// Componente Navbar
function Navbar() {

  return (

    <nav>

      {/* Enlace a la página principal */}
      <Link to="/">
        Home
      </Link>

      {/* Enlace a la página de productos */}
      <Link to="/products">
        Products
      </Link>

      {/* Enlace al carrito */}
      <Link to="/cart">
        Cart
      </Link>

    </nav>

  );
}

// Exportamos el componente
export default Navbar;