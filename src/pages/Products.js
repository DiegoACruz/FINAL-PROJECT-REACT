import React, { useContext } from "react";
import plants from "../data/plantsData";
import { CartContext } from "../context/CartContext";

const categories = ["Indoor Plants", "Succulents", "Flowering Plants"];

function Products() {

  const { addToCart, cart } = useContext(CartContext);

  return (
    <div className="products-container">

      <h1>Our Plants</h1>

      {categories.map((category) => (
        <div key={category}>

          <h2>{category}</h2>

          <div className="plants-grid">

            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => {

                // Verificamos si el producto ya está en el carrito
                const isInCart = cart.some(item => item.id === plant.id);

                return (
                  <div className="plant-card" key={plant.id}>

                    <div className="plant-image-wrapper">
                      <img src={plant.image} alt={plant.name} />
                    </div>

                    <h3>{plant.name}</h3>

                    <p>${plant.price}</p>

                    {/* Botón que se deshabilita si ya está en el carrito */}
                    <button
                      onClick={() => addToCart(plant)}
                      disabled={isInCart}
                    >
                      {isInCart ? "Added to Cart ✓" : "Add to Cart"}
                    </button>

                  </div>
                );

              })}

          </div>

        </div>
      ))}
    </div>
  );
}

export default Products;