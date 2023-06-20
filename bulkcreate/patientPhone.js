const { Sequelize } = require('sequelize');
const PatientPhone = require('../models/PatientPhone');

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
          patient_id: 1,
          phone: '123-456-7890',
        },
        {
          patient_id: 2,
          phone: '987-654-3210',
        },
        {
          patient_id: 3,
          phone: '555-123-4567',
        },
        {
          patient_id: 4,
          phone: '888-555-1234',
        },
        {
          patient_id: 5,
          phone: '999-888-5555',
        },
        {
          patient_id: 6,
          phone: '777-999-8888',
        },
        {
          patient_id: 7,
          phone: '333-777-9999',
        },
        {
          patient_id: 8,
          phone: '222-333-7777',
        },
        {
          patient_id: 9,
          phone: '444-222-3333',
        },
        {
          patient_id: 10,
          phone: '666-444-2222',
        },
        {
          patient_id: 11,
          phone: '111-666-4444',
        },
        {
          patient_id: 12,
          phone: '777-111-6666',
        },
        {
          patient_id: 13,
          phone: '888-777-1111',
        },
        {
          patient_id: 14,
          phone: '222-888-7777',
        },
        {
          patient_id: 15,
          phone: '555-222-8888',
        },
        {
          patient_id: 16,
          phone: '333-555-2222',
        },
        {
          patient_id: 17,
          phone: '999-333-5555',
        },
        {
          patient_id: 18,
          phone: '666-999-3333',
        },
        {
          patient_id: 19,
          phone: '111-666-9999',
        },
        {
          patient_id: 20,
          phone: '444-111-6666',
        },
      ];
      
      

    await PatientPhone.bulkCreate(sampleData);
    console.log('Categories data inserted successfully.');
  } catch (error) {
    console.error('Failed to insert categories data:', error);
  } finally {
    sequelize.close(); // Close the database connection after inserting data
  }
}
