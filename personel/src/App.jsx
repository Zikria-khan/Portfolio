// src/App.js
import React from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

const App = () => {
  return (
    <div>
      <h1>My Contact Page</h1>
      <ContactList />
    </div>
  );
};

export default App;
