import React from 'react'; 

const Projects = () => (
  <section id="projects" className="projects">
    <h2>Projects</h2>
    <div className="project-list">

      <div className="project-card e-commerce">
        <h3>E-commerce Project</h3>
        <p>A fully-featured e-commerce platform built with the MERN stack.</p>
        <a href="https://github.com/Zikria-khan/Mern-stack-websites.git" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        <a href="https://ecommerce-8tb6.vercel.app/" target="_blank" rel="noopener noreferrer">View Live</a>
      </div>

      <div className="project-card voice-recorder">
        <h3>Voice Recorder App</h3>
        <p>A voice recording application developed with React and Node.js.</p>
        <a href="https://github.com/Zikria-khan/apprepo.git" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        <a href="https://mern-stack-websites-qvef.vercel.app/" target="_blank" rel="noopener noreferrer">View Live</a>
      </div>

      <div className="project-card voice-to-speech">
        <h3>Voice-to-Speech Converter</h3>
        <p>A voice-to-speech converter application that converts spoken language into text.</p>
        <a href="https://github.com/Zikria-khan/Voice-to-Speech.git" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        <a href="https://voice-to-speech-9sl1.vercel.app/" target="_blank" rel="noopener noreferrer">View Live</a>
      </div>

    </div>
  </section>
);

export default Projects;
