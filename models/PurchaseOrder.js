const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Supplier = require('./Supplier');

const PurchaseOrder = sequelize.define('purchase_order', {
  purchase_order_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  status: {
    type: DataTypes.STRING(50),
  },
  total_amount: {
    type: DataTypes.DECIMAL(10, 2),
  },
  supplier_id: {
    type: DataTypes.INTEGER,
    references: {
        model: Supplier,
        key: 'supplier_id',
    },
},
  quantity: {
    type: DataTypes.INTEGER,
  },
  status: {
    type: DataTypes.STRING(50),
    defaultValue: 'pending',
  },
});

PurchaseOrder.belongsTo(Supplier, { foreignKey: 'supplier_id' });

module.exports = PurchaseOrder;
