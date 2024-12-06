import React from 'react';
import "./Projects.css";

const Projects = () => (
  <section id="projects" className="projects">
    <h2>Projects</h2>
    <div className="project-list">
      <div className="project-card voice-recorder">
        <img
          src="/voice-recorder.png" // Path to image in public folder
          alt="Voice Recorder App"
          className="project-image"
        />
        <h3>Voice Recorder App</h3>
        <p>A voice recording application developed with React and Node.js.</p>
        <a href="https://github.com/Zikria-khan/apprepo.git" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        <a href="https://mern-stack-websites-qvef.vercel.app/" target="_blank" rel="noopener noreferrer">View Live</a>
      </div>

      <div className="project-card voice-to-speech">
        <img
          src="/voice-to-text.png" // Path to image in public folder
          alt="Voice-to-text Converter"
          className="project-image"
        />
        <h3>Voice-to-Speech Converter</h3>
        <p>A voice-to-speech converter application that converts spoken language into text.</p>
        <a href="https://github.com/Zikria-khan/Voice-to-Speech.git" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        <a href="https://voice-to-speech-7q3p.vercel.app/" target="_blank" rel="noopener noreferrer">View Live</a>
      </div>

      <div className="project-card e-commerce-new">
        <img
          src="/ecommerce.png" // Path to image in public folder
          alt="E-commerce Project"
          className="project-image"
        />
        <h3>New E-commerce Project</h3>
        <p>A new version of the e-commerce platform with updated features and enhancements.</p>
        <a href="https://github.com/Zikria-khan/Mern-stack-websites.git" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        <a href="https://commerce-v89r.vercel.app/" target="_blank" rel="noopener noreferrer">View Live</a>
      </div>

      <div className="project-card chat-app">
        <img
          src="/chatapp.png" // Path to image in public folder
          alt="Chat App"
          className="project-image"
        />
        <h3>Chat App Project</h3>
        <p>A real-time chat application built with the MERN stack, featuring private and group messaging.</p>
        <a href="https://github.com/Zikria-khan/chat-app.git" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        <a href="https://mernapp1-i423.vercel.app/" target="_blank" rel="noopener noreferrer">View Live</a>
      </div>
    </div>
  </section>
);

export default Projects;
