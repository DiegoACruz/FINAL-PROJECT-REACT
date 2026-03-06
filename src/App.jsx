import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import ProductList from "./pages/ProductList";
import CartItem from "./pages/CartItem";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {

  return (

    <Router>

      <Navbar />

      <Routes>

        <Route path="/" element={<LandingPage />} />

        <Route path="/products" element={<ProductList />} />

        <Route path="/cart" element={<CartItem />} />

      </Routes>

    </Router>

  );

}

export default App;