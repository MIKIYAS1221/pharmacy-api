const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Supplier = sequelize.define('supplier', {
  supplier_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fname: {
    type: DataTypes.STRING(50),
  },
  lname: {
    type: DataTypes.STRING(50),
  },
  street_no: {
    type: DataTypes.STRING(10),
  },
  city: {
    type: DataTypes.STRING(50),
  },
  postal_code: {
    type: DataTypes.STRING(10),
  },
  street_name: {
    type: DataTypes.STRING(100),
  },
  email: {
    type: DataTypes.STRING(100),
  },
});

module.exports = Supplier;
