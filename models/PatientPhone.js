const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Patient = require('./Patient');

const PatientPhone = sequelize.define('patient_phone', {
  patient_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Patient,
      key: 'patient_id',
    },
  },
  phone: {
    type: DataTypes.STRING(20),
  },
  //both of these are required to make the primary key
});
this.primaryKeyAttributes=['patient_id', 'phone'];

module.exports = PatientPhone;
