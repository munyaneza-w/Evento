// models/user.js

const { DataTypes } = require('sequelize');
const sequelize = require('./index'); // Import the Sequelize instance

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.JSONB, // Store location as JSON (e.g., { latitude: 40.7128, longitude: -74.0060 })
    allowNull: true,
  },
  preferredCategories: {
    type: DataTypes.ARRAY(DataTypes.STRING), // Store categories as an array of strings
    allowNull: true,
  },
  language: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'users', // Specify the table name
});

module.exports = User;
