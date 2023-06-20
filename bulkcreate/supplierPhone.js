const { Sequelize } = require('sequelize');
const SupplierPhone = require('../models/SupplierPhone');

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
    insertSupplierPhones(); // Call the function to insert data after establishing the connection
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

async function insertSupplierPhones() {
  try {
    const sampleData = [
        {
          supplier_id: 1,
          phone: '123-456-7890',
        },
        {
          supplier_id: 2,
          phone: '987-654-3210',
        },
        {
          supplier_id: 3,
          phone: '555-123-4567',
        },
        {
          supplier_id: 4,
          phone: '888-555-1234',
        },
        {
          supplier_id: 5,
          phone: '934-888-5555',
        },
        {
          supplier_id: 6,
          phone: '237-999-8888',
        },
        {
          supplier_id: 7,
          phone: '356-747-9999',
        },
        {
          supplier_id: 8,
          phone: '222-333-3544',
        },
        {
          supplier_id: 9,
          phone: '444-222-5454',
        },
        {
          supplier_id: 10,
          phone: '666-345-2222',
        }
      ];
      
      

    await SupplierPhone.bulkCreate(sampleData);
    console.log('Categories data inserted successfully.');
  } catch (error) {
    console.error('Failed to insert categories data:', error);
  } finally {
    sequelize.close(); // Close the database connection after inserting data
  }
}
