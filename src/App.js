// Importamos Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importamos páginas
import LandingPage from "./pages/LandingPage";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

// Importamos Navbar
import Navbar from "./components/Navbar";

// Importamos estilos
import "./App.css";

// Componente principal
function App() {
  return (
    <Router>

      {/* Navbar visible en toda la app */}
      <Navbar />

      {/* Rutas de la aplicación */}
      <Routes>

        {/* Página inicial */}
        <Route path="/" element={<LandingPage />} />

        {/* Página de productos */}
        <Route path="/products" element={<Products />} />

        {/* Página del carrito */}
        <Route path="/cart" element={<Cart />} />

      </Routes>

    </Router>
  );
}

// Exportamos App
export default App;