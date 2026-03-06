// Importamos React Router para manejar la navegación entre páginas
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importamos la página principal (landing page)
import LandingPage from "./pages/LandingPage";

// Importamos la página de listado de productos
import ProductList from "./pages/ProductList";

// Importamos la página del carrito
import Cart from "./pages/CartSlice";

// Importamos el componente Navbar que contiene la navegación
import Navbar from "./components/Navbar";

// Importamos los estilos globales de la aplicación
import "./App.css";

// Creamos el componente principal de la aplicación
function App() {

  // Retornamos la estructura principal de la aplicación
  return (

    // Router permite que la aplicación tenga múltiples páginas sin recargar
    <Router>

      {/* Navbar visible en todas las páginas */}
      <Navbar />

      {/* Definimos todas las rutas de la aplicación */}
      <Routes>

        {/* Ruta para la página inicial */}
        <Route path="/" element={<LandingPage />} />

        {/* Ruta para la página de productos */}
        <Route path="/products" element={<ProductList />} />

        {/* Ruta para la página del carrito */}
        <Route path="/cart" element={<Cart />} />

      </Routes>

    </Router>
  );
}

// Exportamos el componente App para que pueda ser usado en index.js
export default App;