const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Patient = sequelize.define('patient', {
  patient_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fname: {
    type: DataTypes.STRING(255),
  },
  sname: {
    type: DataTypes.STRING(255),
  },
  gender: {
    type: DataTypes.STRING(10),
  },
  date_of_birth: {
    type: DataTypes.DATEONLY,
  },
  street: {
    type: DataTypes.STRING(255),
  },
  street_name: {
    type: DataTypes.STRING(255),
  },
  postal_code: {
    type: DataTypes.STRING(10),
  },
  city: {
    type: DataTypes.STRING(255),
  },
});
module.exports = Patient;
