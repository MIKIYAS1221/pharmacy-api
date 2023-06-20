const { Sequelize } = require('sequelize');
const User = require('../models/User');

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
    insertUsers(); // Call the function to insert data after establishing the connection
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

async function insertUsers() {
  try {
    const sampleData = [
        {
          fname: 'John',
          sname: 'Doe',
          license: '123456',
          password: 'password123',
          email: 'john.doe@example.com',
          date_of_birth: '1990-01-01',
          role_id: 1, // Role ID for manager
        },
        {
          fname: 'Jane',
          sname: 'Smith',
          license: '789012',
          password: 'password456',
          email: 'jane.smith@example.com',
          date_of_birth: '1995-05-10',
          role_id: 2, // Role ID for cashier
        },
        {
          fname: 'Alice',
          sname: 'Johnson',
          license: '345678',
          password: 'password789',
          email: 'alice.johnson@example.com',
          date_of_birth: '1988-09-15',
          role_id: 3, // Role ID for pharmacist
        },
      ];
      

    await User.bulkCreate(sampleData);
    console.log('Categories data inserted successfully.');
  } catch (error) {
    console.error('Failed to insert categories data:', error);
  } finally {
    sequelize.close(); // Close the database connection after inserting data
  }
}
