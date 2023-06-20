const { Sequelize } = require('sequelize');
const Refill = require('../models/Refill');

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
    insertRefills(); // Call the function to insert data after establishing the connection
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

async function insertRefills() {
  try {
    const sampleData = [
        {
          date_despended: '2023-06-15',
          prescription_id: 1,
          patient_id: 1,
        },
        {
          date_despended: '2023-06-16',
          prescription_id: 2,
          patient_id: 2,
        },
        {
          date_despended: '2023-06-17',
          prescription_id: 3,
          patient_id: 1,
        },
        {
          date_despended: '2023-06-18',
          prescription_id: 4,
          patient_id: 3,
        },
        {
          date_despended: '2023-06-19',
          prescription_id: 5,
          patient_id: 2,
        },
        {
          date_despended: '2023-06-20',
          prescription_id: 6,
          patient_id: 1,
        },
        {
          date_despended: '2023-06-21',
          prescription_id: 7,
          patient_id: 3,
        },
        {
          date_despended: '2023-06-22',
          prescription_id: 8,
          patient_id: 2,
        },
        {
          date_despended: '2023-06-23',
          prescription_id: 9,
          patient_id: 1,
        },
        {
          date_despended: '2023-06-24',
          prescription_id: 10,
          patient_id: 3,
        },
      ];
      
      

    await Refill.bulkCreate(sampleData);
    console.log('Categories data inserted successfully.');
  } catch (error) {
    console.error('Failed to insert categories data:', error);
  } finally {
    sequelize.close(); // Close the database connection after inserting data
  }
}
