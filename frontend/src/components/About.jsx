import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [data] = useState({
    name: "Zakriya Khan",
    bio: "I'm a MERN Stack developer with a focus on building scalable web applications. With a strong background in JavaScript and web development, I am passionate about creating user-friendly interfaces and efficient server-side logic.",
    skills: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "JavaScript",
      "HTML & CSS"
    ],
    image: "/zakriya.jpg" // Ensure this image exists in the public folder
  });

  return (
    <section id="about" className="about">
      <div className="about-header">
        <h2>About Me</h2>
      </div>
      <div className="about-content">
        <img src={data.image} alt={data.name} className="about-image" />
        <div className="about-text">
          <h3>{data.name}</h3>
          <p className="bio">{data.bio}</p>
          <p><strong>Skills:</strong></p>
          <ul>
            {data.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
