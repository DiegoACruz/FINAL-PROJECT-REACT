// Importamos React y el hook useContext para acceder al contexto del carrito
import React, { useContext } from "react";

// Importamos los datos de las plantas desde el archivo de datos
import plants from "../data/plantsData";

// Importamos el contexto del carrito para poder agregar productos
import { CartContext } from "../context/CartContext";

// Creamos un arreglo con las categorías de plantas
// Esto nos permitirá agrupar las plantas en secciones
const categories = [
  "Indoor Plants",
  "Succulents",
  "Flowering Plants"
];

// Creamos el componente ProductList que mostrará todas las plantas
function ProductList() {

  // Obtenemos la función para agregar productos al carrito
  // y también el carrito actual
  const { addToCart, cart } = useContext(CartContext);

  // Retornamos la interfaz de la página
  return (

    // Contenedor principal de la página
    <div className="products-container">

      {/* Título de la página */}
      <h1>Our Plants</h1>

      {/* Recorremos cada categoría */}
      {categories.map((category) => (

        // Sección de cada categoría
        <div key={category}>

          {/* Nombre de la categoría */}
          <h2>{category}</h2>

          {/* Grid que contiene las plantas */}
          <div className="plants-grid">

            {/* Filtramos las plantas que pertenecen a esta categoría */}
            {plants
              .filter((plant) => plant.category === category)

              // Recorremos cada planta
              .map((plant) => {

                // Verificamos si la planta ya está en el carrito
                const isInCart = cart.some(
                  item => item.id === plant.id
                );

                // Retornamos la tarjeta de la planta
                return (

                  <div className="plant-card" key={plant.id}>

                    {/* Contenedor de la imagen */}
                    <div className="plant-image-wrapper">

                      {/* Imagen de la planta */}
                      <img
                        src={plant.image}
                        alt={plant.name}
                      />

                    </div>

                    {/* Nombre de la planta */}
                    <h3>{plant.name}</h3>

                    {/* Precio */}
                    <p>${plant.price}</p>

                    {/* Botón para agregar al carrito */}
                    <button

                      // Al hacer clic agregamos la planta
                      onClick={() => addToCart(plant)}

                      // Deshabilitamos el botón si ya está en el carrito
                      disabled={isInCart}

                    >

                      {/* Cambiamos el texto si ya fue agregado */}
                      {isInCart
                        ? "Added to Cart ✓"
                        : "Add to Cart"}

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

// Exportamos el componente para poder usarlo en App.jsx
export default ProductList;