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

    <div style={{ padding: "30px" }}>

      <h1>Your Shopping Cart</h1>

      {cart.length === 0 ? (

        <p>Your cart is empty</p>

      ) : (

        <>

          {cart.map(item => (

            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                marginBottom: "20px",
                background: "white",
                padding: "15px",
                borderRadius: "10px"
              }}
            >

              <img
                src={item.image}
                alt={item.name}
                width="100"
              />

              <div>

                <h3>{item.name}</h3>

                <p>${item.price}</p>

                <div>

                  <button onClick={() => decreaseQuantity(item.id)}>-</button>

                  <span style={{ margin: "10px" }}>
                    {item.quantity}
                  </span>

                  <button onClick={() => increaseQuantity(item.id)}>+</button>

                </div>

                <button
                  style={{ marginTop: "10px", background: "red" }}
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>

              </div>

            </div>

          ))}

          <h2>Total: ${getTotal()}</h2>

        </>

      )}

    </div>

  );

}

export default CartItem;