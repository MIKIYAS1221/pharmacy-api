const { Sequelize } = require('sequelize');
const Categories = require('../models/Category');

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
    insertCategories(); // Call the function to insert data after establishing the connection
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

async function insertCategories() {
  try {
    const categoriesData = [
      { name: 'Painkillers', description: 'Medications used to relieve pain and reduce inflammation.' },
      { name: 'Antibiotics', description: 'Medications used to treat bacterial infections.' },
      { name: 'Antihistamines', description: 'Medications used to relieve allergy symptoms.' },
      { name: 'Antacids', description: 'Medications used to neutralize stomach acid and treat indigestion.' },
      { name: 'Cough and Cold', description: 'Medications used to relieve symptoms of cough and cold.' },
      { name: 'Anti-inflammatory Drugs', description: 'Medications used to reduce inflammation in the body.' },
      { name: 'Antidepressants', description: 'Medications used to treat depression and related conditions.' },
      { name: 'Antiemetics', description: 'Medications used to control nausea and vomiting.' },
      { name: 'Antidiabetic Drugs', description: 'Medications used to manage diabetes and control blood sugar levels.' },
      { name: 'Anticoagulants', description: 'Medications used to prevent blood clots.' },
      { name: 'Antihypertensives', description: 'Medications used to treat high blood pressure.' },
      { name: 'Diuretics', description: 'Medications used to increase urine output and reduce fluid retention.' },
      { name: 'Laxatives', description: 'Medications used to promote bowel movements and relieve constipation.' },
      { name: 'Muscle Relaxants', description: 'Medications used to relax muscles and reduce muscle spasms.' },
      { name: 'Cardiovascular Drugs', description: 'Medications used to treat heart and blood vessel-related conditions.' },
      { name: 'Sedatives', description: 'Medications used to induce sleep and reduce anxiety.' },
      { name: 'Hormonal Supplements', description: 'Medications used to supplement or regulate hormonal levels.' },
      { name: 'Respiratory Medications', description: 'Medications used to treat respiratory conditions and improve breathing.' },
      { name: 'Topical Medications', description: 'Medications applied to the skin for localized treatment.' },
      { name: 'Vitamins and Supplements', description: 'Medications used to supplement essential vitamins and nutrients.' }
    ];

    await Categories.bulkCreate(categoriesData);
    console.log('Categories data inserted successfully.');
  } catch (error) {
    console.error('Failed to insert categories data:', error);
  } finally {
    sequelize.close(); // Close the database connection after inserting data
  }
}
