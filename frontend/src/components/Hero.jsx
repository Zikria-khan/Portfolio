import React from 'react';
import { Link } from 'react-router-dom';  // Importing Link from react-router-dom
import "./Hero.css";

const Hero = () => (
  <section className="hero">
    <div className="hero-content">
      <h1>Hi, I'm Zakriya Khan</h1>
      <p>MERN Stack Developer | Passionate about creating innovative web applications.</p>
      <Link to="/projects" className="hero-button">See My Work</Link>  {/* Use Link for navigation */}
    </div>
  </section>
);

export default Hero;
