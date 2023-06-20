const { Sequelize } = require('sequelize');
const Sale = require('../models/Sale');

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
          unit: 'bottle',
          Total_amount: 100.00,
          sale_date: '2023-06-15',
          medication_id: 1,
          patient_id: 1,
          status: 'completed',
        },
        {
          unit: 'box',
          Total_amount: 50.00,
          sale_date: '2023-06-16',
          medication_id: 2,
          patient_id: 2,
          status: 'completed',
        },
        {
          unit: 'packet',
          Total_amount: 20.00,
          sale_date: '2023-06-17',
          medication_id: 3,
          patient_id: 3,
          status: 'completed',
        },
        {
          unit: 'bottle',
          Total_amount: 80.00,
          sale_date: '2023-06-18',
          medication_id: 1,
          patient_id: 1,
          status: 'completed',
        },
        {
          unit: 'box',
          Total_amount: 30.00,
          sale_date: '2023-06-19',
          medication_id: 2,
          patient_id: 2,
          status: 'completed',
        },
        {
          unit: 'packet',
          Total_amount: 15.00,
          sale_date: '2023-06-20',
          medication_id: 3,
          patient_id: 3,
          status: 'completed',
        },
        {
          unit: 'bottle',
          Total_amount: 60.00,
          sale_date: '2023-06-21',
          medication_id: 1,
          patient_id: 1,
          status: 'completed',
        },
        {
          unit: 'box',
          Total_amount: 25.00,
          sale_date: '2023-06-22',
          medication_id: 2,
          patient_id: 2,
          status: 'completed',
        },
        {
          unit: 'packet',
          Total_amount: 10.00,
          sale_date: '2023-06-23',
          medication_id: 3,
          patient_id: 3,
          status: 'completed',
        },
        {
          unit: 'bottle',
          Total_amount: 40.00,
          sale_date: '2023-06-24',
          medication_id: 1,
          patient_id: 1,
          status: 'completed',
        },
      ];
      
      

    await Sale.bulkCreate(sampleData);
    console.log('Categories data inserted successfully.');
  } catch (error) {
    console.error('Failed to insert categories data:', error);
  } finally {
    sequelize.close(); // Close the database connection after inserting data
  }
}
