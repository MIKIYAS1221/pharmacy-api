const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Category = sequelize.define('category', {
  category_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(50),
  },
  description: {
    type: DataTypes.STRING(255),
  },
  created_at: {
    type: DataTypes.DATE,
  },
  updated_at: {
    type: DataTypes.DATE,
  },
});

module.exports = Category;
