// Importamos React
import React from "react";

// Importamos ReactDOM
import ReactDOM from "react-dom/client";

// Importamos la aplicación
import App from "./App";

// Importamos el proveedor del carrito
import { CartProvider } from "./context/CartContext";

// Importamos estilos
import "./index.css";

// Creamos la raíz de React
const root = ReactDOM.createRoot(document.getElementById("root"));

// Renderizamos la aplicación
root.render(

  // CartProvider permite que toda la aplicación use el carrito
  <CartProvider>

    <App />

  </CartProvider>

);