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
  medication_id: {
    type: DataTypes.INTEGER,
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
  status: {
    type: DataTypes.STRING(50),
    defaultValue: 'pending',
  },
});

Sale.belongsTo(Medication, { foreignKey: 'medication_id' });
Sale.belongsTo(Patient, { foreignKey: 'patient_id' });

module.exports = Sale;
