import React, { useContext } from "react";
import plants from "../data/plantsData";
import { CartContext } from "../context/CartContext";

function ProductList() {

  const { cart, addToCart } = useContext(CartContext);

  const isInCart = (id) => {
    return cart.some(item => item.id === id);
  };

  return (

    <div className="products-container">

      <h1>Our Plants</h1>

      {["Indoor Plants", "Succulents", "Flowering Plants"].map(category => (

        <div key={category}>

          <h2 className="category-title">{category}</h2>

          <div className="products-grid">

            {plants
              .filter(plant => plant.category === category)
              .map(plant => (

                <div className="product-card" key={plant.id}>

                  <img
                    src={plant.image}
                    alt={plant.name}
                  />

                  <h3>{plant.name}</h3>

                  <p>${plant.price}</p>

                  <button
                    disabled={isInCart(plant.id)}
                    onClick={() => addToCart(plant)}
                  >

                    {isInCart(plant.id) ? "Added to Cart" : "Add to Cart"}

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