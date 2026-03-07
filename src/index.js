// Importamos la librería principal de React
// React permite crear componentes y manejar la interfaz
import React from "react";

// Importamos ReactDOM para poder renderizar la aplicación en el navegador
import ReactDOM from "react-dom/client";

// Importamos el componente principal de la aplicación
import App from "./App";

// Importamos los estilos globales de la aplicación
import "./index.css";

// Importamos el proveedor del carrito (CartContext)
// Este proveedor permite que TODA la aplicación tenga acceso al carrito
import { CartProvider } from "./context/CartContext";


// Creamos la raíz de la aplicación dentro del elemento HTML con id="root"
const root = ReactDOM.createRoot(
  document.getElementById("root")
);


// Renderizamos la aplicación
root.render(

  // React.StrictMode ayuda a detectar problemas en desarrollo
  <React.StrictMode>

    {/* 
      CartProvider envuelve toda la aplicación.
      Esto permite que cualquier componente pueda usar el carrito
      sin necesidad de pasar datos manualmente entre componentes.
    */}
    <CartProvider>

      {/* Componente principal de la aplicación */}
      <App />

    </CartProvider>

  </React.StrictMode>

);