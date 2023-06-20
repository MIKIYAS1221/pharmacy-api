const { Sequelize } = require('sequelize');
const Inventory = require('../models/Inventory');

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
    insertInventorys(); // Call the function to insert data after establishing the connection
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

async function insertInventorys() {
  try {
    const sampleData = [
        {
          Quantity: 100,
          record_threshold: 50,
          expiry_date: '2023-06-30',
          medication_id: 1,
        },
        {
          Quantity: 75,
          record_threshold: 30,
          expiry_date: '2023-07-15',
          medication_id: 2,
        },
        {
          Quantity: 50,
          record_threshold: 20,
          expiry_date: '2023-08-05',
          medication_id: 3,
        },
        {
          Quantity: 120,
          record_threshold: 60,
          expiry_date: '2023-09-10',
          medication_id: 4,
        },
        {
          Quantity: 90,
          record_threshold: 45,
          expiry_date: '2023-07-31',
          medication_id: 5,
        },
        {
          Quantity: 80,
          record_threshold: 40,
          expiry_date: '2023-08-20',
          medication_id: 6,
        },
        {
          Quantity: 70,
          record_threshold: 35,
          expiry_date: '2023-08-15',
          medication_id: 7,
        },
        {
          Quantity: 60,
          record_threshold: 30,
          expiry_date: '2023-09-05',
          medication_id: 8,
        },
        {
          Quantity: 110,
          record_threshold: 55,
          expiry_date: '2023-07-25',
          medication_id: 9,
        },
        {
          Quantity: 95,
          record_threshold: 47,
          expiry_date: '2023-08-12',
          medication_id: 10,
        },
        {
          Quantity: 40,
          record_threshold: 15,
          expiry_date: '2023-09-15',
          medication_id: 11,
        },
        {
          Quantity: 85,
          record_threshold: 42,
          expiry_date: '2023-07-28',
          medication_id: 12,
        },
        {
          Quantity: 130,
          record_threshold: 65,
          expiry_date: '2023-08-25',
          medication_id: 13,
        },
        {
          Quantity: 55,
          record_threshold: 25,
          expiry_date: '2023-09-08',
          medication_id: 14,
        },
        {
          Quantity: 100,
          record_threshold: 50,
          expiry_date: '2023-08-10',
          medication_id: 15,
        },
        {
          Quantity: 90,
          record_threshold: 45,
          expiry_date: '2023-09-20',
          medication_id: 16,
        },
        {
          Quantity: 75,
          record_threshold: 30,
          expiry_date: '2023-07-20',
          medication_id: 17,
        },
        {
          Quantity: 65,
          record_threshold: 32,
          expiry_date: '2023-08-18',
          medication_id: 18,
        },
        {
          Quantity: 105,
          record_threshold: 52,
          expiry_date: '2023-09-02',
          medication_id: 19,
        },
        {
          Quantity: 120,
          record_threshold: 60,
          expiry_date: '2023-09-25',
          medication_id: 20,
        },
        // Add more sample data entries here...
      ];
      

    await Inventory.bulkCreate(sampleData);
    console.log('Categories data inserted successfully.');
  } catch (error) {
    console.error('Failed to insert categories data:', error);
  } finally {
    sequelize.close(); // Close the database connection after inserting data
  }
}
