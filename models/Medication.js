const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const category = require('./Category');

const Medication = sequelize.define('medication', {
  medication_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(255),
  },
  unit: {
    type: DataTypes.STRING(50),
  },
  strength: {
    type: DataTypes.STRING(50),
  },
  description: {
    type: DataTypes.TEXT,
  },
  category_id: {
    type: DataTypes.INTEGER,
    references: {
        model: category,
        key: 'category_id',
    },
    },
  manufacturer: {
    type: DataTypes.STRING(255),
  },
  dosage: {
    type: DataTypes.STRING(100),
  },
  product_code: {
    type: DataTypes.STRING(100),
  },
  created_at: {
    type: DataTypes.DATE,
  },
});

module.exports = Medication;
