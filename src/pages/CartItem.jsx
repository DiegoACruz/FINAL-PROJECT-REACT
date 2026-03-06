import React from "react";
import { useSelector } from "react-redux";

function CartItem() {

  // Accedemos a los productos del carrito
  const items = useSelector(state => state.cart.items);

  return (

    <div>

      <h1>Your Shopping Cart</h1>

      {/* Si el carrito está vacío */}
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (

        items.map((item, index) => (
          <div key={index}>
            <p>{item.name}</p>
          </div>
        ))

      )}

    </div>

  );
}

export default CartItem;