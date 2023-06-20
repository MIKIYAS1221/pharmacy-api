const { Sequelize } = require('sequelize');
const PurchaseOrder = require('../models/PurchaseOrder');

// Create Sequelize instance
const sequelize = new Sequelize('db', 'root', '1q2w#R$E', {
  host: 'localhost',
  dialect: 'mysql',
});

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
    insertPurchaseOrders(); // Call the function to insert data after establishing the connection
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

async function insertPurchaseOrders() {
  try {
    const sampleData = [
        {
          status: 'pending',
          total_amount: 1000.00,
          supplier_id: 1,
          quantity: 10,
        },
        {
          status: 'completed',
          total_amount: 2500.00,
          supplier_id: 2,
          quantity: 15,
        },
        {
          status: 'pending',
          total_amount: 1500.00,
          supplier_id: 1,
          quantity: 8,
        },
        {
          status: 'completed',
          total_amount: 3000.00,
          supplier_id: 3,
          quantity: 12,
        },
        {
          status: 'pending',
          total_amount: 800.00,
          supplier_id: 2,
          quantity: 5,
        },
        {
          status: 'completed',
          total_amount: 1800.00,
          supplier_id: 1,
          quantity: 9,
        },
        {
          status: 'pending',
          total_amount: 1200.00,
          supplier_id: 3,
          quantity: 6,
        },
        {
          status: 'completed',
          total_amount: 3500.00,
          supplier_id: 2,
          quantity: 18,
        },
        {
          status: 'pending',
          total_amount: 900.00,
          supplier_id: 1,
          quantity: 7,
        },
        {
          status: 'completed',
          total_amount: 2200.00,
          supplier_id: 3,
          quantity: 14,
        },
      ];
      

    await PurchaseOrder.bulkCreate(sampleData);
    console.log('Categories data inserted successfully.');
  } catch (error) {
    console.error('Failed to insert categories data:', error);
  } finally {
    sequelize.close(); // Close the database connection after inserting data
  }
}
