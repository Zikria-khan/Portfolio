const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST route to handle contact form submission
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: 'Message sent successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send message.' });
  }
});

// GET route to fetch all contacts
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find(); // Fetch all contacts from the database
    res.status(200).json(contacts); // Send the contacts as a JSON response
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch contacts.' }); // Handle errors
  }
});

module.exports = router;
