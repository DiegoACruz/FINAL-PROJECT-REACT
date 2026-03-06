// Importamos React
import React from "react";

// Importamos los datos de las plantas
import plants from "../data/plantsData";

// Componente que muestra la lista de productos
function ProductList() {

  return (

    <div>

      {/* Título de la página */}
      <h1>Our Plants</h1>

      {/* Recorremos el arreglo de plantas */}
      {plants.map((plant) => (

        <div key={plant.id}>

          {/* Nombre de la planta */}
          <h2>{plant.name}</h2>

          {/* Imagen de la planta */}
          <img
            src={plant.image}
            alt={plant.name}
            width="200"
          />

          {/* Precio */}
          <p>${plant.price}</p>

        </div>

      ))}

    </div>

  );
}

// Exportamos el componente
export default ProductList;