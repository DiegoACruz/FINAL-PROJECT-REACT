// Importamos React
import React, { useContext } from "react";

// Importamos Link para navegación
import { Link } from "react-router-dom";

// Importamos el contexto del carrito
import { CartContext } from "../context/CartContext";

// Componente Navbar
function Navbar() {

  // Obtenemos el carrito
  const { cart } = useContext(CartContext);

  // Calculamos el total de items
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (

    <nav className="navbar">

      {/* Logo */}
      <div className="logo">

        <Link to="/">
          <h2>Paradise Nursery</h2>
        </Link>

      </div>

      {/* Links */}
      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/products">Plants</Link>

        {/* Carrito con contador */}
        <Link to="/cart">

          Cart ({totalItems})

        </Link>

      </div>

    </nav>

  );

}

export default Navbar;