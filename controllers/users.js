// controllers/users.js

const bcrypt = require('bcrypt'); // For password hashing
//const jwt = require('jsonwebtoken'); // For JWT (if you use it)
const User = require('../models/user'); // Import the User model

// Function to handle user registration
exports.register = async (req, res) => {
  try {
    // Extract user data from the request body
    const { username, email, password, location, preferredCategories, language } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      location,
      preferredCategories,
      language,
    });

    // Respond with the new user (excluding the password)
    res.status(201).json({
      id: newUser.id,
      username: newUser.username,
      email: newUser.email,
      location: newUser.location,
      preferredCategories: newUser.preferredCategories,
      language: newUser.language,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Function to handle user login
exports.login = async (req, res) => {
  try {
    // Extract email and password from the request body
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Compare the password with the hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Respond with success message
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Function to get the current user profile
exports.getMe = async (req, res) => {
  try {
    // In a real application, you would get the user ID from the authenticated request
    // For now, we'll just return a dummy user
    const user = {
      id: 1,
      username: 'testuser',
      email: 'test@example.com',
      location: { latitude: 40.7128, longitude: -74.0060 },
      preferredCategories: ['music', 'sports'],
      language: 'en',
    };
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Function to update the current user profile
exports.updateMe = async (req, res) => {
  try {
    // In a real application, you would get the user ID from the authenticated request
    // For now, we'll just return a success message
    res.status(200).json({ message: 'User profile updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
