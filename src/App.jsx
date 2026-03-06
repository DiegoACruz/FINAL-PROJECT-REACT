// Importamos React para crear el componente principal
import React from "react";

// Importamos HashRouter para manejar las rutas (necesario para GitHub Pages)
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// Importamos las páginas de la aplicación
import LandingPage from "./pages/LandingPage";
import ProductList from "./pages/ProductList";
import CartItem from "./pages/CartItem";

// Importamos la barra de navegación
import Navbar from "./components/Navbar";

// Importamos los estilos globales
import "./App.css";


// Componente principal de la aplicación
function App() {

  return (

    // Router permite navegar entre páginas sin recargar el sitio
    <Router>

      {/* Navbar visible en todas las páginas */}
      <Navbar />

      {/* Definición de las rutas de la aplicación */}
      <Routes>

        {/* Ruta de la página principal */}
        <Route
          path="/"
          element={<LandingPage />}
        />

        {/* Ruta de la página de productos */}
        <Route
          path="/products"
          element={<ProductList />}
        />

        {/* Ruta de la página del carrito */}
        <Route
          path="/cart"
          element={<CartItem />}
        />

      </Routes>

    </Router>

  );

}

// Exportamos el componente App para usarlo en index.js
export default App;