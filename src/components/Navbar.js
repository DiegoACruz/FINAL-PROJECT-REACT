import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

  return (

    <nav className="navbar">

      <div className="logo">
        <Link to="/">
          <h2>Paradise Nursery</h2>
        </Link>
      </div>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/products">Plants</Link>

        <Link to="/cart">Cart</Link>

      </div>

    </nav>

  );

}

export default Navbar;