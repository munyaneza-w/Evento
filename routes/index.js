const express = require('express');
const router = express.Router();

const usersRouter = require('./users');
const eventsRouter = require('./events');

// Mount the individual routers
router.use('/users', usersRouter);
router.use('/events', eventsRouter);

module.exports = router;
