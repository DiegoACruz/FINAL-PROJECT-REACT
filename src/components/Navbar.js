// Importamos React
import React, { useContext } from "react";

// Importamos Link para navegar entre páginas
import { Link } from "react-router-dom";

// Importamos el contexto del carrito
import { CartContext } from "../context/CartContext";

// Componente Navbar
function Navbar() {

  // Obtenemos el carrito del contexto
  const { cart } = useContext(CartContext);

  // Calculamos cuántos productos hay en el carrito
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">

      {/* Logo o nombre de la tienda */}
      <h2 className="logo">
        <Link to="/">Paradise Nursery</Link>
      </h2>

      {/* Enlaces de navegación */}
      <div className="nav-links">

        {/* Ir a productos */}
        <Link to="/products">Plants</Link>

        {/* Ir al carrito */}
        <Link to="/cart" className="cart-link">
          Cart 🛒 ({cartCount})
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;