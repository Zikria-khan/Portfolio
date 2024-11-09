import React from 'react';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">
      <img src="/zakriya.jpg" alt="Zakriya Khan" className="user-image" />
      <h1>Zakriya Khan</h1>
    </div>
    <ul className="navbar-links">
      <li><a href="#about">About</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
);

export default Navbar;
