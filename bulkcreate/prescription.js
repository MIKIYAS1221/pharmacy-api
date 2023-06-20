const { Sequelize } = require('sequelize');
const Prescription = require('../models/Prescription');

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
    insertPrescriptions(); // Call the function to insert data after establishing the connection
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

async function insertPrescriptions() {
  try {
    const sampleData = [
        {
          dosage: '10mg',
          frequency: 'Once daily',
          duration: '7 days',
          refill_count: 3,
          status: 'active',
          patient_id: 1,
          medication_id: 1,
        },
        {
          dosage: '20mg',
          frequency: 'Twice daily',
          duration: '14 days',
          refill_count: 2,
          status: 'active',
          patient_id: 2,
          medication_id: 2,
        },
        {
          dosage: '5mg',
          frequency: 'Once daily',
          duration: '30 days',
          refill_count: 1,
          status: 'active',
          patient_id: 3,
          medication_id: 3,
        },
        {
          dosage: '15mg',
          frequency: 'Three times daily',
          duration: '10 days',
          refill_count: 0,
          status: 'inactive',
          patient_id: 1,
          medication_id: 2,
        },
        {
          dosage: '10mg',
          frequency: 'Once daily',
          duration: '7 days',
          refill_count: 2,
          status: 'active',
          patient_id: 2,
          medication_id: 1,
        },
        {
          dosage: '25mg',
          frequency: 'Twice daily',
          duration: '14 days',
          refill_count: 1,
          status: 'active',
          patient_id: 3,
          medication_id: 3,
        },
        {
          dosage: '10mg',
          frequency: 'Once daily',
          duration: '30 days',
          refill_count: 3,
          status: 'active',
          patient_id: 1,
          medication_id: 2,
        },
        {
          dosage: '30mg',
          frequency: 'Twice daily',
          duration: '10 days',
          refill_count: 2,
          status: 'active',
          patient_id: 2,
          medication_id: 1,
        },
        {
          dosage: '5mg',
          frequency: 'Once daily',
          duration: '7 days',
          refill_count: 1,
          status: 'inactive',
          patient_id: 3,
          medication_id: 3,
        },
        {
          dosage: '20mg',
          frequency: 'Three times daily',
          duration: '14 days',
          refill_count: 0,
          status: 'inactive',
          patient_id: 1,
          medication_id: 2,
        },
      ];
      

    await Prescription.bulkCreate(sampleData);
    console.log('Categories data inserted successfully.');
  } catch (error) {
    console.error('Failed to insert categories data:', error);
  } finally {
    sequelize.close(); // Close the database connection after inserting data
  }
}
