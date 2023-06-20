const { Sequelize } = require('sequelize');
const Patient = require('../models/Patient');

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
    insertPatients(); // Call the function to insert data after establishing the connection
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

async function insertPatients() {
  try {
    const sampleData = [
        {
          fname: 'John',
          sname: 'Doe',
          gender: 'Male',
          date_of_birth: '1990-01-01',
          street: '123 Main Street',
          street_name: 'Main Street',
          postal_code: '10001',
          city: 'New York',
        },
        {
          fname: 'Jane',
          sname: 'Smith',
          gender: 'Female',
          date_of_birth: '1995-05-10',
          street: '456 Oak Avenue',
          street_name: 'Oak Avenue',
          postal_code: '90001',
          city: 'Los Angeles',
        },
        {
          fname: 'Michael',
          sname: 'Johnson',
          gender: 'Male',
          date_of_birth: '1988-06-15',
          street: '789 Elm Street',
          street_name: 'Elm Street',
          postal_code: '60601',
          city: 'Chicago',
        },
        {
          fname: 'Emily',
          sname: 'Brown',
          gender: 'Female',
          date_of_birth: '1992-09-20',
          street: '101 Cedar Avenue',
          street_name: 'Cedar Avenue',
          postal_code: '77002',
          city: 'Houston',
        },
        {
          fname: 'David',
          sname: 'Lee',
          gender: 'Male',
          date_of_birth: '1985-12-05',
          street: '222 Pine Street',
          street_name: 'Pine Street',
          postal_code: '94102',
          city: 'San Francisco',
        },
        {
          fname: 'Sarah',
          sname: 'Taylor',
          gender: 'Female',
          date_of_birth: '1991-04-25',
          street: '333 Ocean Boulevard',
          street_name: 'Ocean Boulevard',
          postal_code: '33101',
          city: 'Miami',
        },
        {
          fname: 'Matthew',
          sname: 'Clark',
          gender: 'Male',
          date_of_birth: '1989-07-12',
          street: '444 Maple Avenue',
          street_name: 'Maple Avenue',
          postal_code: '75201',
          city: 'Dallas',
        },
        {
          fname: 'Olivia',
          sname: 'Anderson',
          gender: 'Female',
          date_of_birth: '1994-03-08',
          street: '555 Spruce Street',
          street_name: 'Spruce Street',
          postal_code: '98101',
          city: 'Seattle',
        },
        {
          fname: 'Daniel',
          sname: 'Harris',
          gender: 'Male',
          date_of_birth: '1993-02-18',
          street: '666 Walnut Lane',
          street_name: 'Walnut Lane',
          postal_code: '02101',
          city: 'Boston',
        },
        {
          fname: 'Sophia',
          sname: 'Martinez',
          gender: 'Female',
          date_of_birth: '1996-08-02',
          street: '777 Chestnut Drive',
          street_name: 'Chestnut Drive',
          postal_code: '30301',
          city: 'Atlanta',
        },
        {
          fname: 'Alexander',
          sname: 'Taylor',
          gender: 'Male',
          date_of_birth: '1987-11-15',
          street: '888 Elmwood Avenue',
          street_name: 'Elmwood Avenue',
          postal_code: '02108',
          city: 'Boston',
        },
        {
          fname: 'Ava',
          sname: 'Jackson',
          gender: 'Female',
          date_of_birth: '1999-10-05',
          street: '999 Willow Road',
          street_name: 'Willow Road',
          postal_code: '90012',
          city: 'Los Angeles',
        },
        {
          fname: 'William',
          sname: 'White',
          gender: 'Male',
          date_of_birth: '1997-09-25',
          street: '111 Pinecone Lane',
          street_name: 'Pinecone Lane',
          postal_code: '60603',
          city: 'Chicago',
        },
        {
          fname: 'Charlotte',
          sname: 'Anderson',
          gender: 'Female',
          date_of_birth: '1998-07-20',
          street: '222 Rose Street',
          street_name: 'Rose Street',
          postal_code: '94103',
          city: 'San Francisco',
        },
        {
          fname: 'James',
          sname: 'Wilson',
          gender: 'Male',
          date_of_birth: '1993-06-08',
          street: '333 Willow Avenue',
          street_name: 'Willow Avenue',
          postal_code: '33102',
          city: 'Miami',
        },
        {
          fname: 'Mia',
          sname: 'Smith',
          gender: 'Female',
          date_of_birth: '2000-03-15',
          street: '444 Oakwood Drive',
          street_name: 'Oakwood Drive',
          postal_code: '75202',
          city: 'Dallas',
        },
        {
          fname: 'Benjamin',
          sname: 'Johnson',
          gender: 'Male',
          date_of_birth: '1986-04-28',
          street: '555 Maple Lane',
          street_name: 'Maple Lane',
          postal_code: '98102',
          city: 'Seattle',
        },
        {
          fname: 'Ella',
          sname: 'Davis',
          gender: 'Female',
          date_of_birth: '1995-01-12',
          street: '666 Birch Street',
          street_name: 'Birch Street',
          postal_code: '02102',
          city: 'Boston',
        },
        {
          fname: 'Joseph',
          sname: 'Martinez',
          gender: 'Male',
          date_of_birth: '1989-12-10',
          street: '777 Elm Drive',
          street_name: 'Elm Drive',
          postal_code: '30302',
          city: 'Atlanta',
        },
        {
          fname: 'Victoria',
          sname: 'Wilson',
          gender: 'Female',
          date_of_birth: '1991-11-05',
          street: '888 Maplewood Avenue',
          street_name: 'Maplewood Avenue',
          postal_code: '02109',
          city: 'Boston',
        },
      ];
      

    await Patient.bulkCreate(sampleData);
    console.log('Categories data inserted successfully.');
  } catch (error) {
    console.error('Failed to insert categories data:', error);
  } finally {
    sequelize.close(); // Close the database connection after inserting data
  }
}
