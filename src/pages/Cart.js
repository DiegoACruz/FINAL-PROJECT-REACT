import React, { useContext } from "react";

// Importamos el contexto del carrito
import { CartContext } from "../context/CartContext";

// Componente de la página Cart
function Cart() {

  // Obtenemos las funciones y el estado del carrito desde el contexto
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, getTotal } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>

      {/* Si el carrito está vacío */}
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {/* Lista de productos */}
          <div className="cart-items">
            {cart.map(item => (
              <div className="cart-item" key={item.id}>

                {/* Nombre de la planta */}
                <h3>{item.name}</h3>

                {/* Precio unitario */}
                <p>Price: ${item.price}</p>

                {/* Controles de cantidad */}
                <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>

                {/* Subtotal del producto */}
                <p>Subtotal: ${item.price * item.quantity}</p>

                {/* Botón para eliminar del carrito */}
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
          </div>

          {/* Total general */}
          <h2>Total: ${getTotal()}</h2>
        </>
      )}
    </div>
  );
}

export default Cart;