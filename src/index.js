// Importamos React
import React from "react";

// Importamos ReactDOM para renderizar la aplicación
import ReactDOM from "react-dom/client";

// Importamos el componente principal de la aplicación
import App from "./App";

// Importamos el proveedor del carrito (Context API)
import { CartProvider } from "./context/CartContext";

// Importamos estilos globales
import "./index.css";


// Creamos la raíz de la aplicación en el div "root" del index.html
const root = ReactDOM.createRoot(document.getElementById("root"));


// Renderizamos la aplicación
root.render(

  // StrictMode ayuda a detectar problemas en desarrollo
  <React.StrictMode>

    {/* CartProvider permite que toda la aplicación tenga acceso al carrito */}
    <CartProvider>

      {/* Componente principal */}
      <App />

    </CartProvider>

  </React.StrictMode>

);