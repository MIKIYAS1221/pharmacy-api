const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Medication = require('./Medication');
const Patient = require('./Patient');

const Sale = sequelize.define('sale', {
  sale_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  unit : {
    type: DataTypes.STRING(50),
  },
  Total_amount: {
    type: DataTypes.DECIMAL(10, 2),
  },
  sale_date: {
    type: DataTypes.DATEONLY,
  },
  medication_ids: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    references: {
      model: Medication,
      key: 'medication_id',
    },
  },
  patient_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Patient,
      key: 'patient_id',
    },
  },
  created_at: {
    type: DataTypes.DATE,
  },
  status: {
    type: DataTypes.STRING(50),
    defaultValue: 'pending',
  },
});

module.exports = Sale;
