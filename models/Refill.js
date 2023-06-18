const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Prescription = require('./Prescription');
const Patient = require('./Patient');

const Refill = sequelize.define('refill', {
  date_despended: {
    type: DataTypes.DATEONLY,
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

Refill.belongsTo(Prescription, {
  foreignKey: 'prescription_id',
});

module.exports = Refill;
