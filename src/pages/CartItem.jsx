// Importamos React
import React from "react";

// Componente del carrito de compras
function CartItem() {

  return (

    <div>

      {/* Título de la página */}
      <h1>Your Shopping Cart</h1>

      {/* Mensaje temporal si no hay productos */}
      <p>Your cart is currently empty.</p>

    </div>

  );
}

// Exportamos el componente
export default CartItem;