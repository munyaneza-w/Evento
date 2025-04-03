// models/event.js

const { DataTypes } = require('sequelize');
const sequelize = require('./index'); // Import the Sequelize instance

const Event = sequelize.define('Event', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  location: {
    type: DataTypes.JSONB, // Store location as JSON (e.g., { latitude: 40.7128, longitude: -74.0060 })
    allowNull: false,
  },
  dateTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  categories: {
    type: DataTypes.ARRAY(DataTypes.STRING), // Store categories as an array of strings
    allowNull: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'events', // Specify the table name
});

module.exports = Event;
