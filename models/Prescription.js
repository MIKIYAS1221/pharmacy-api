const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Patient = require('./Patient');
const Medication = require('./Medication');

const Prescription = sequelize.define('prescription', {
  prescription_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  dosage: {
    type: DataTypes.STRING(50),
  },
  frequency: {
    type: DataTypes.STRING(50),
  },
  duration: {
    type: DataTypes.STRING(50),
  },
  refill_count: {
    type: DataTypes.INTEGER,
  },
  status: {
    type: DataTypes.STRING(50),
  },
    patient_id: {
    type: DataTypes.INTEGER,
    references: {
        model: Patient,
        key: 'patient_id',
    },
    },
    medication_id: {
    type: DataTypes.INTEGER,
    references: {
        model: Medication,
        key: 'medication_id',
    },
    },
  });

  Prescription.belongsTo(Patient, {
    foreignKey: 'patient_id',
  });

  Prescription.belongsTo(Medication, {
    foreignKey: 'medication_id',
  });

module.exports = Prescription;
