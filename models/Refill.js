const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Prescription = require('./Prescription');
const Patient = require('./Patient');

const Refill = sequelize.define('refill', {
  updated_at: {
    type: DataTypes.DATE,
    primaryKey: true,
  },
  date_despended: {
    type: DataTypes.DATEONLY,
  },
  created_at: {
    type: DataTypes.DATE,
  },
  prescription_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Prescription,
      key: 'prescription_id',
    },
  },
    patient_id: {
    type: DataTypes.INTEGER,
    references: {
        model: Patient,
        key: 'patient_id',
    },
    },
});

module.exports = Refill;
