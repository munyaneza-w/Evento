const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes'); // Import the main router
const sequelize = require('./models/index'); // Import the sequelize instance

// Middleware
app.use(express.json()); // Parse JSON request bodies

// Use the main router
app.use('/api', routes); // All routes will start with /api

// Basic route for testing
app.get('/', (req, res) => {
  res.send('Hello from Evento!');
});

// Sync the models with the database
sequelize.sync({ force: true }) // Use { force: true } to drop and recreate tables (for development only)
  .then(() => {
    console.log('Database & tables synced!');
    app.listen(port, () => {
      console.log(`Evento app listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });
