const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const medication = require('./Medication');

const Inventory = sequelize.define('inventory', {
  inventory_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Quantity: {
    type: DataTypes.INTEGER,
  },
  record_threshold: {
    type: DataTypes.INTEGER,
  },
  expiry_date: {
    type: DataTypes.DATEONLY,
  },
    medication_id: {
    type: DataTypes.INTEGER,
    references: {
        model: medication,
        key: 'medication_id',
    },
    },
  created_at: {
    type: DataTypes.DATE,
  },
  updated_at: {
    type: DataTypes.DATE,
  },
});

module.exports = Inventory;
