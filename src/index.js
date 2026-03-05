// Importamos React
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importamos la app principal
import App from './App';

// Importamos estilos globales
import './index.css';

// Importamos el CartProvider para envolver la app
import { CartProvider } from './context/CartContext';

// Creamos la raíz
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizamos la app
root.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);