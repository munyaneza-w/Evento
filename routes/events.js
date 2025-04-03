const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/events'); // Import the event controller

// Create a new event
router.post('/', eventsController.create);

// Get all events (with optional filtering)
router.get('/', eventsController.getAll);

// Get a specific event
router.get('/:id', eventsController.getById);

// Update an event
router.put('/:id', eventsController.update);

// Delete an event
router.delete('/:id', eventsController.delete);

// Search for events
router.get('/search', eventsController.search);

module.exports = router;
