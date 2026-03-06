// Importamos React
import React from "react";

// Importamos HashRouter en lugar de BrowserRouter
// Esto es necesario para que el enrutamiento funcione correctamente en GitHub Pages
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// Importamos las páginas de la aplicación
import LandingPage from "./pages/LandingPage";
import ProductList from "./pages/ProductList";
import CartItem from "./pages/CartItem";

// Importamos el Navbar
import Navbar from "./components/Navbar";

// Importamos estilos
import "./App.css";

// Componente principal de la aplicación
function App() {
  return (
    <Router>

      {/* Barra de navegación visible en todas las páginas */}
      <Navbar />

      {/* Definimos las rutas de la aplicación */}
      <Routes>

        {/* Página principal */}
        <Route path="/" element={<LandingPage />} />

        {/* Página de lista de productos */}
        <Route path="/products" element={<ProductList />} />

        {/* Página del carrito */}
        <Route path="/cart" element={<CartItem />} />

      </Routes>

    </Router>
  );
}

// Exportamos el componente
export default App;