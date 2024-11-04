// src/App.js
import React from 'react';
import ContactList from './components/ContactList';
import "./App.css"
const App = () => {
  return (
    <div>
      <h1>My Contact Page</h1>
      <ContactList />
    </div>
  );
};

export default App;
