const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Role = sequelize.define('role', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  salary: {
    type: DataTypes.DECIMAL(10, 2),
  },
  description: {
    type: DataTypes.STRING(255),
  },
  type: {
    type: DataTypes.STRING(50),
  },
});

module.exports = Role;
