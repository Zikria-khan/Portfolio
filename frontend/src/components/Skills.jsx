import React, { useState } from 'react';
import "./Skills.css"; // Assuming the CSS for certificates is here

const Certificates = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const [currentImage, setCurrentImage] = useState('');   // State to hold the current image to display in the modal

  // Function to open the modal with the selected image
  const openModal = (imageSrc) => {
    setCurrentImage(imageSrc);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage('');
  };

  return (
    <section id="certificates" className="certificates">
      <h2>My Certificates</h2>
      <div className="certificate-list">
        <div className="certificate-card">
          <h3>Certificate 1</h3>
          <img
            src="/certificate1.png"
            alt="Certificate 1"
            className="certificate-image"
            onClick={() => openModal('/certificate1.png')} // Open modal on click
          />
          <p>Certificate for completing an advanced React course.</p>
        </div>

        <div className="certificate-card">
          <h3>Certificate 2</h3>
          <img
            src="/certificate2.png"
            alt="Certificate 2"
            className="certificate-image"
            onClick={() => openModal('/certificate2.png')} // Open modal on click
          />
          <p>Certificate for mastering Node.js and Express.js.</p>
        </div>

        {/* Add more certificate cards as needed */}
      </div>

      {/* Modal for displaying the enlarged image */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}> {/* Close modal when clicking outside */}
          <div className="modal-content" onClick={(e) => e.stopPropagation()}> {/* Prevent close on clicking modal content */}
            <img src={currentImage} alt="Certificate Enlarged" className="modal-image" />
            <button className="close-btn" onClick={closeModal}>X</button> {/* Close button */}
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
