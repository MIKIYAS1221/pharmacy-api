const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Medication = require('./Medication');

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
        model: Medication,
        key: 'medication_id',
    },
    },
});

//foreign key
Inventory.belongsTo(Medication, { foreignKey: 'medication_id' });

module.exports = Inventory;
