import React, { useState } from "react";
import "./Navbar.css"; // Import the CSS file for styling

const Navbar = () => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleCart = () => setCartOpen(!isCartOpen);
  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="/zakriya.jpg" alt="Zakriya Khan" className="user-image" />
          <h1>Zakriya Khan</h1>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="cart-button" onClick={toggleCart}>
          🛒
        </button>
        {isCartOpen && (
          <div className="cart-dropdown">
            <p>Your cart is empty.</p>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
