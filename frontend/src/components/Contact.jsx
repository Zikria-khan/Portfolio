import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = ({ onContactAdded }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    const newContact = { name, email, message };

    try {
      const response = await axios.post('https://portfolio-3oad.vercel.app/api/contact', newContact);
      onContactAdded(response.data); // Callback to update the contact list
      // Clear the form fields after submission
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error adding contact:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h2>Add New Contact</h2>
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
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
