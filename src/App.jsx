// Importamos Router
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// Importamos páginas
import LandingPage from "./pages/LandingPage";
import ProductList from "./pages/ProductList";
import CartItem from "./pages/CartItem";

// Importamos componentes
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";

// Importamos estilos
import "./App.css";

// Componente principal
function App() {
  return (
    <Router>

      <Navbar />

      <Routes>

        <Route path="/" element={<LandingPage />} />

        <Route path="/products" element={<ProductList />} />

        <Route path="/cart" element={<CartItem />} />

        <Route path="/about" element={<AboutUs />} />

      </Routes>

    </Router>
  );
}

export default App;