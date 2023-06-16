const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Role = require('./Role');

const User = sequelize.define('user', {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fname: {
    type: DataTypes.STRING(50),
  },
  sname: {
    type: DataTypes.STRING(50),
  },
  license: {
    type: DataTypes.STRING(50),
  },
  password: {
    type: DataTypes.STRING(100),
  },
  email: {
    type: DataTypes.STRING(100),
  },
  started_at: {
    type: DataTypes.DATE,
  },
  date_of_birth: {
    type: DataTypes.DATEONLY,
  },
  role_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Role,
      key: 'id',
    },
  },
});

module.exports = User;
