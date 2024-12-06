import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';  // Assuming your Navbar component is in the same directory
import './Contact.css';

const ContactForm = ({ onContactAdded }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    const newContact = { name, email, message };

    try {
      const response = await axios.post('https://portfolio-3oad.vercel.app/api/contact', newContact);
      
      // Ensure onContactAdded is a function before calling it
      if (typeof onContactAdded === 'function') {
        onContactAdded(response.data); // Callback to update the contact list
      } else {
        console.error('onContactAdded is not a function');
      }

      // Clear the form fields after submission
      setName('');
      setEmail('');
      setMessage('');
      setError(''); // Clear any previous error message
    } catch (error) {
      console.error('Error adding contact:', error);
      setError('Failed to add contact. Please try again.'); // Set error message
    }
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Contact Form */}
      <section id="contact">
        <form onSubmit={handleSubmit} className="contact-form">
          <h2>Send Us a Message</h2>
          {error && <p className="error-message">{error}</p>} {/* Display error message */}
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </>
  );
};

export default ContactForm;
