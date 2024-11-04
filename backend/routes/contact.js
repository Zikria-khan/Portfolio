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
// DELETE route to delete a contact by ID
router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const deletedContact = await Contact.findByIdAndDelete(id);
  
      if (!deletedContact) {
        return res.status(404).json({ message: 'Contact not found' });
      }
  
      res.status(200).json({ message: 'Contact deleted successfully' });
    } catch (error) {
      console.error('Error deleting contact:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
module.exports = router;
