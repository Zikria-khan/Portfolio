import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    try {
      const response = await axios.get('https://portfolio-3oad.vercel.app/api/contact');
      setContacts(response.data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  useEffect(() => {
    fetchContacts(); // Initial fetch on mount

    const intervalId = setInterval(() => {
      fetchContacts(); // Fetch contacts every 5 seconds
    }, 5000); // Adjust the interval time as needed (5000ms = 5 seconds)

    return () => clearInterval(intervalId); // Clean up the interval on unmount
  }, []);

  const deleteContact = async (id) => {
    try {
      await axios.delete(`https://portfolio-3oad.vercel.app/api/contact/${id}`);
      setContacts(contacts.filter(contact => contact._id !== id)); // Update state to remove deleted contact
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  return (
    <div className="contact-list">
      <h2>Contact Messages</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact._id}>
            <strong>{contact.name}</strong> (
            <a href={`mailto:${contact.email}`} className="email-link">
              {contact.email}
            </a>
            ): {contact.message}
            {/* X for deleting the contact */}
            <span 
              onClick={() => deleteContact(contact._id)} 
              className="delete-icon" 
              role="button" 
              tabIndex={0} 
              onKeyPress={(e) => e.key === 'Enter' && deleteContact(contact._id)}
              aria-label="Delete contact"
            >
              X
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
