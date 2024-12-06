import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';  // Importing React Router components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';  // Importing global styles for the app

const App = () => {
  const [isLoading, setIsLoading] = useState(true);  // Track loading state
  const location = useLocation();  // Get the current location (path)
  
  useEffect(() => {
    // Simulate loading process (e.g., fetching data or waiting for resources)
    setIsLoading(true);  // Reset loading when route changes
    setTimeout(() => {
      setIsLoading(false);  // After 2 seconds, loading is complete
    }, 2000);  // Adjust the timeout duration as needed
  }, [location]);  // Run the effect on location change (when the route changes)

  if (isLoading) {
    // Show loading spinner during the loading phase
    return (
      <div className="loader">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="App">
      <Navbar />  {/* Navigation bar */}
      <Routes>  {/* Define the routes for different pages */}
        <Route path="/" element={<Hero />} />  {/* Home Page */}
        <Route path="/about" element={<About />} />  {/* About Us Page */}
        <Route path="/projects" element={<Projects />} />  {/* Projects Page */}
        <Route path="/skills" element={<Skills />} />  {/* Skills Page */}
        <Route path="/contact" element={<Contact />} />  {/* Contact Page */}
      </Routes>
    </div>
  );
};

export default App;
