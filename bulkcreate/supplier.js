const { Sequelize } = require('sequelize');
const Suppliers = require('../models/Supplier');

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
    insertSuppliers(); // Call the function to insert data after establishing the connection
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

async function insertSuppliers() {
  try {
    const supplierData = [
        {
            fname: 'John',
            lname: 'Doe',
            street_no: '123',
            city: 'New York',
            postal_code: '10001',
            street_name: 'Main Street',
            email: 'john.doe@example.com',
          },
          {
            fname: 'Jane',
            lname: 'Smith',
            street_no: '456',
            city: 'Los Angeles',
            postal_code: '90001',
            street_name: 'Oak Avenue',
            email: 'jane.smith@example.com',
          },
          {
            fname: 'Michael',
            lname: 'Johnson',
            street_no: '789',
            city: 'Chicago',
            postal_code: '60601',
            street_name: 'Elm Street',
            email: 'michael.johnson@example.com',
          },
          {
            fname: 'Emily',
            lname: 'Brown',
            street_no: '101',
            city: 'Houston',
            postal_code: '77002',
            street_name: 'Cedar Avenue',
            email: 'emily.brown@example.com',
          },
          {
            fname: 'David',
            lname: 'Lee',
            street_no: '222',
            city: 'San Francisco',
            postal_code: '94102',
            street_name: 'Pine Street',
            email: 'david.lee@example.com',
          },
          {
            fname: 'Sarah',
            lname: 'Taylor',
            street_no: '333',
            city: 'Miami',
            postal_code: '33101',
            street_name: 'Ocean Boulevard',
            email: 'sarah.taylor@example.com',
          },
          {
            fname: 'Matthew',
            lname: 'Clark',
            street_no: '444',
            city: 'Dallas',
            postal_code: '75201',
            street_name: 'Maple Avenue',
            email: 'matthew.clark@example.com',
          },
          {
            fname: 'Olivia',
            lname: 'Anderson',
            street_no: '555',
            city: 'Seattle',
            postal_code: '98101',
            street_name: 'Spruce Street',
            email: 'olivia.anderson@example.com',
          },
          {
            fname: 'Daniel',
            lname: 'Harris',
            street_no: '666',
            city: 'Boston',
            postal_code: '02101',
            street_name: 'Walnut Lane',
            email: 'daniel.harris@example.com',
          },
          {
            fname: 'Sophia',
            lname: 'Martinez',
            street_no: '777',
            city: 'Atlanta',
            postal_code: '30301',
            street_name: 'Chestnut Drive',
            email: 'sophia.martinez@example.com',
          }
        ];

    await Suppliers.bulkCreate(supplierData);
    console.log('Categories data inserted successfully.');
  } catch (error) {
    console.error('Failed to insert categories data:', error);
  } finally {
    sequelize.close(); // Close the database connection after inserting data
  }
}
