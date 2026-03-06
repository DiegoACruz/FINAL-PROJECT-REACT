// Importamos React para poder crear el componente
import React from "react";

// Creamos el componente CartItem
// Este componente representa UNA planta dentro del carrito
function CartItem({ item, increaseQuantity, decreaseQuantity, removeFromCart }) {

  // Retornamos la interfaz visual del producto dentro del carrito
  return (

    // Tarjeta del producto en el carrito
    <div className="cart-item">

      {/* Imagen de la planta */}
      <img
        src={item.image} // URL de la imagen
        alt={item.name} // Texto alternativo para accesibilidad
        style={{ width: "120px", borderRadius: "10px" }} // estilo simple
      />

      {/* Nombre de la planta */}
      <h3>{item.name}</h3>

      {/* Precio unitario */}
      <p>Price: ${item.price}</p>

      {/* Controles para cambiar la cantidad */}
      <div className="quantity-controls">

        {/* Botón para disminuir cantidad */}
        <button onClick={() => decreaseQuantity(item.id)}>
          -
        </button>

        {/* Cantidad actual */}
        <span>{item.quantity}</span>

        {/* Botón para aumentar cantidad */}
        <button onClick={() => increaseQuantity(item.id)}>
          +
        </button>

      </div>

      {/* Subtotal de este producto */}
      <p>
        Subtotal: ${item.price * item.quantity}
      </p>

      {/* Botón para eliminar el producto del carrito */}
      <button
        className="remove-btn"
        onClick={() => removeFromCart(item.id)}
      >
        Remove
      </button>

    </div>

  );
}

// Exportamos el componente para usarlo en CartSlice.jsx
export default CartItem;