// src/components/ContactList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/contact');
        setContacts(response.data);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContacts();
  }, []);

  return (
    <div>
      <h2>Contact Messages</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact._id}>
            <strong>{contact.name}</strong> ({contact.email}): {contact.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
