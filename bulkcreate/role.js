const { Sequelize } = require('sequelize');
const Role = require('../models/Role');

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
    insertPatientPhones(); // Call the function to insert data after establishing the connection
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

async function insertPatientPhones() {
  try {
    const sampleData = [
        {
          salary: 5000.00,
          description: 'Manager role',
          type: 'manager',
        },
        {
          salary: 3000.00,
          description: 'Cashier role',
          type: 'cashier',
        },
        {
          salary: 4000.00,
          description: 'Pharmacist role',
          type: 'pharmacist',
        },
      ];
      
      

    await Role.bulkCreate(sampleData);
    console.log('Categories data inserted successfully.');
  } catch (error) {
    console.error('Failed to insert categories data:', error);
  } finally {
    sequelize.close(); // Close the database connection after inserting data
  }
}
