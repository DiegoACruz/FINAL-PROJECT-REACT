// Importamos React y el hook useContext para acceder al contexto del carrito
import React, { useContext } from "react";

// Importamos Link para poder navegar entre páginas
import { Link } from "react-router-dom";

// Importamos el contexto del carrito
import { CartContext } from "../context/CartContext";

// Importamos el componente que representa cada item del carrito
import CartItem from "./CartItem";

// Creamos el componente principal del carrito
function CartSlice() {

  // Obtenemos el carrito y las funciones desde el contexto global
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, getTotal } = useContext(CartContext);

  // Calculamos el número total de plantas en el carrito
  const totalPlants = cart.reduce((total, item) => total + item.quantity, 0);

  // Retornamos la interfaz visual
  return (

    // Contenedor principal de la página del carrito
    <div className="cart-container">

      {/* Título de la página */}
      <h1>Your Cart</h1>

      {/* Si el carrito está vacío mostramos un mensaje */}
      {cart.length === 0 ? (

        // Mensaje cuando no hay productos
        <p>Your cart is empty.</p>

      ) : (

        <>
          {/* Mostramos el total de plantas */}
          <h3>Total Plants: {totalPlants}</h3>

          {/* Contenedor donde aparecerán los productos */}
          <div className="cart-items">

            {/* Recorremos cada producto del carrito */}
            {cart.map(item => (

              // Usamos el componente CartItem para mostrar cada producto
              <CartItem
                key={item.id} // clave única para React
                item={item} // enviamos el producto
                increaseQuantity={increaseQuantity} // función para aumentar cantidad
                decreaseQuantity={decreaseQuantity} // función para disminuir cantidad
                removeFromCart={removeFromCart} // función para eliminar producto
              />

            ))}

          </div>

          {/* Mostramos el costo total */}
          <h2>Total Cost: ${getTotal()}</h2>

          {/* Botones de acción del carrito */}
          <div style={{ marginTop: "20px" }}>

            {/* Botón para volver a la tienda */}
            <Link to="/products">
              <button style={{ marginRight: "10px" }}>
                Continue Shopping
              </button>
            </Link>

            {/* Botón de checkout */}
            <button onClick={() => alert("Checkout coming soon!")}>
              Checkout
            </button>

          </div>

        </>

      )}

    </div>
  );
}

// Exportamos el componente para usarlo en App.jsx
export default CartSlice;