const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const UserPhone = sequelize.define('user_phone', {
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'user_id',
    },
  },
  phone: {
    type: DataTypes.STRING(20),
  },
});
this.primaryKeyAttributes=['user_id', 'phone'];

module.exports = UserPhone;
