import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Menu toggled!", isMenuOpen); // Debug log
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="/asd.jpeg" alt="Zakriya Khan" className="user-image" />
          <h1>Zakriya Khan</h1>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
