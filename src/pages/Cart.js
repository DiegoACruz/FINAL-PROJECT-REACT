// Importamos React
import React, { useContext } from "react";

// Importamos el contexto del carrito
import { CartContext } from "../context/CartContext";

// Creamos el componente Cart
function Cart() {

  // Obtenemos el carrito y las funciones del contexto
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, getTotal } = useContext(CartContext);

  return (

    // Contenedor principal del carrito
    <div className="cart-container">

      {/* Título */}
      <h1>Your Cart</h1>

      {/* Si el carrito está vacío */}
      {cart.length === 0 ? (

        <p>Your cart is empty.</p>

      ) : (

        <>
          {/* Contenedor de productos */}
          <div className="cart-items">

            {/* Recorremos todos los productos */}
            {cart.map((item) => {

              // Si por algún error item no existe lo ignoramos
              if (!item) return null;

              return (

                // Tarjeta del producto
                <div className="cart-item" key={item.id}>

                  {/* Imagen del producto */}
                  {/* Solo se muestra si existe */}
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: "120px", borderRadius: "8px" }}
                    />
                  )}

                  {/* Nombre */}
                  <h3>{item.name}</h3>

                  {/* Precio */}
                  <p>Price: ${item.price}</p>

                  {/* Controles de cantidad */}
                  <div className="quantity-controls">

                    {/* Botón disminuir */}
                    <button onClick={() => decreaseQuantity(item.id)}>
                      -
                    </button>

                    {/* Cantidad */}
                    <span>{item.quantity}</span>

                    {/* Botón aumentar */}
                    <button onClick={() => increaseQuantity(item.id)}>
                      +
                    </button>

                  </div>

                  {/* Subtotal */}
                  <p>Subtotal: ${item.price * item.quantity}</p>

                  {/* Botón eliminar */}
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>

                </div>

              );

            })}

          </div>

          {/* Total */}
          <h2>Total: ${getTotal()}</h2>

        </>

      )}

    </div>

  );

}

// Exportamos el componente
export default Cart;