const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users'); // Import the user controller

// User registration
router.post('/register', usersController.register);

// User login
router.post('/login', usersController.login);

// Get current user profile
router.get('/me', usersController.getMe);

// Update current user profile
router.put('/me', usersController.updateMe);

module.exports = router;
