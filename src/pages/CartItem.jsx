import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartItem() {

  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    getTotal
  } = useContext(CartContext);

  return (

    <div className="cart-container">

      <h1>Your Shopping Cart</h1>

      {cart.length === 0 ? (

        <p>Your cart is empty</p>

      ) : (

        <>

          {cart.map(item => (

            <div className="cart-item" key={item.id}>

              <img
                src={item.image}
                alt={item.name}
              />

              <div className="cart-info">

                <h3>{item.name}</h3>

                <p>Price: ${item.price}</p>

                <div className="quantity-controls">

                  <button onClick={() => decreaseQuantity(item.id)}>
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button onClick={() => increaseQuantity(item.id)}>
                    +
                  </button>

                </div>

                <p>Subtotal: ${item.price * item.quantity}</p>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>

              </div>

            </div>

          ))}

          <h2 className="cart-total">
            Total: ${getTotal()}
          </h2>

        </>

      )}

    </div>

  );

}

export default CartItem;