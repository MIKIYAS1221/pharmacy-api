const { Sequelize } = require('sequelize');
const UserPhone = require('../models/UserPhone');

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
    insertUserPhones(); // Call the function to insert data after establishing the connection
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

async function insertUserPhones() {
  try {
    const sampleData = [
        {
          user_id: 1, // User ID for John Doe
          phone: '123-456-7890',
        },
        {
          user_id: 2, // User ID for Jane Smith
          phone: '987-654-3210',
        },
        {
          user_id: 3, // User ID for Alice Johnson
          phone: '555-123-4567',
        },
      ];
      
   

    await UserPhone.bulkCreate(sampleData);
    console.log('Categories data inserted successfully.');
  } catch (error) {
    console.error('Failed to insert categories data:', error);
  } finally {
    sequelize.close(); // Close the database connection after inserting data
  }
}
