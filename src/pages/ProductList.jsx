import React, { useContext } from "react";
import plants from "../data/plantsData";
import { CartContext } from "../context/CartContext";

function ProductList() {

  const { cart, addToCart } = useContext(CartContext);

  const isInCart = (id) => {
    return cart.some(item => item.id === id);
  };

  return (

    <div style={{ padding: "30px" }}>

      <h1>Our Plants</h1>

      {["Indoor Plants", "Succulents", "Flowering Plants"].map(category => (

        <div key={category}>

          <h2>{category}</h2>

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>

            {plants
              .filter(plant => plant.category === category)
              .map(plant => (

                <div
                  key={plant.id}
                  style={{
                    border: "1px solid #ddd",
                    padding: "15px",
                    borderRadius: "10px",
                    width: "220px",
                    textAlign: "center",
                    background: "white"
                  }}
                >

                  <img
                    src={plant.image}
                    alt={plant.name}
                    width="200"
                    style={{ borderRadius: "10px" }}
                  />

                  <h3>{plant.name}</h3>

                  <p>${plant.price}</p>

                  <button
                    disabled={isInCart(plant.id)}
                    onClick={() => addToCart(plant)}
                  >

                    {isInCart(plant.id) ? "Added" : "Add to Cart"}

                  </button>

                </div>

              ))}

          </div>

        </div>

      ))}

    </div>

  );

}

export default ProductList;