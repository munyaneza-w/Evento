// controllers/events.js

const Event = require('../models/event'); // Import the Event model

// Function to create a new event
exports.create = async (req, res) => {
  try {
    // Extract event data from the request body
    const { name, description, location, dateTime, categories, userId } = req.body;

    // Create a new event
    const newEvent = await Event.create({
      name,
      description,
      location,
      dateTime,
      categories,
      userId,
    });

    // Respond with the new event
    res.status(201).json(newEvent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Function to get all events
exports.getAll = async (req, res) => {
  try {
    // Get all events from the database
    const events = await Event.findAll();

    // Respond with the events
    res.status(200).json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Function to get a specific event by ID
exports.getById = async (req, res) => {
  try {
    // Extract the event ID from the request parameters
    const { id } = req.params;

    // Find the event by ID
    const event = await Event.findByPk(id);

    // Check if the event exists
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    // Respond with the event
    res.status(200).json(event);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Function to update an event
exports.update = async (req, res) => {
  try {
    // Extract the event ID from the request parameters
    const { id } = req.params;

    // Extract the updated event data from the request body
    const { name, description, location, dateTime, categories } = req.body;

    // Find the event by ID
    const event = await Event.findByPk(id);

    // Check if the event exists
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    // Update the event
    await event.update({
      name,
      description,
      location,
      dateTime,
      categories,
    });

    // Respond with the updated event
    res.status(200).json(event);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Function to delete an event
exports.delete = async (req, res) => {
  try {
    // Extract the event ID from the request parameters
    const { id } = req.params;

    // Find the event by ID
    const event = await Event.findByPk(id);

    // Check if the event exists
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    // Delete the event
    await event.destroy();

    // Respond with a success message
    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Function to search for events
exports.search = async (req, res) => {
  try {
    // In a real application, you would implement the search logic here
    // For now, we'll just return a success message
    res.status(200).json({ message: 'Search events successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
