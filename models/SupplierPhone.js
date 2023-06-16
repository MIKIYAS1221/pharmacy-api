const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Supplier = require('./Supplier');

const SupplierPhone = sequelize.define('supplier_phone', {
  supplier_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Supplier,
      key: 'supplier_id',
    },
  },
  phone: {
    type: DataTypes.STRING(20),
  },
});
this.primaryKeyAttributes=['supplier_id', 'phone'];

module.exports = SupplierPhone;
