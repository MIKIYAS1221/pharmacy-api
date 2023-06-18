const { Sequelize } = require('sequelize');
const Medications = require('../models/Medication');

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
    insertMedications(); // Call the function to insert data after establishing the connection
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

async function insertMedications() {
  try {
    const medicineData = [
        {
          name: 'Ibuprofen',
          unit: 'Tablet',
          strength: '200mg',
          description: 'Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) used to relieve pain, reduce inflammation, and lower fever.',
          category_id: 1,
          manufacturer: 'Manufacturer A',
          dosage: 'Take 1 tablet every 4-6 hours',
          product_code: 'ABC123'
        },
        {
          name: 'Amoxicillin',
          unit: 'Capsule',
          strength: '500mg',
          description: 'Amoxicillin is an antibiotic used to treat various bacterial infections, including respiratory tract infections, urinary tract infections, and skin infections.',
          category_id: 2,
          manufacturer: 'Manufacturer B',
          dosage: 'Take 1 capsule three times a day',
          product_code: 'DEF456'
        },
        {
          name: 'Loratadine',
          unit: 'Tablet',
          strength: '10mg',
          description: 'Loratadine is an antihistamine used to relieve symptoms of allergies such as sneezing, runny nose, and itchy/watery eyes.',
          category_id: 3,
          manufacturer: 'Manufacturer C',
          dosage: 'Take 1 tablet daily',
          product_code: 'GHI789'
        },
        {
          name: 'Tums',
          unit: 'Tablet',
          strength: '500mg',
          description: 'Tums is an antacid medication used to relieve heartburn, indigestion, and sour stomach caused by excess stomach acid.',
          category_id: 4,
          manufacturer: 'Manufacturer D',
          dosage: 'Chew 2 tablets as needed',
          product_code: 'JKL012'
        },
        {
          name: 'Robitussin DM',
          unit: 'Liquid',
          strength: '20mg/10ml',
          description: 'Robitussin DM is a cough suppressant and expectorant used to relieve cough and chest congestion caused by the common cold.',
          category_id: 5,
          manufacturer: 'Manufacturer E',
          dosage: 'Take 10ml every 4 hours',
          product_code: 'MNO345'
        },
        {
          name: 'Prednisone',
          unit: 'Tablet',
          strength: '10mg',
          description: 'Prednisone is a corticosteroid used to reduce inflammation and suppress the immune system in conditions such as allergies, asthma, and arthritis.',
          category_id: 6,
          manufacturer: 'Manufacturer F',
          dosage: 'Take as directed by your doctor',
          product_code: 'PQR678'
        },
        {
          name: 'Prozac',
          unit: 'Capsule',
          strength: '20mg',
          description: 'Prozac is an antidepressant medication belonging to the selective serotonin reuptake inhibitor (SSRI) class, used to treat depression, obsessive-compulsive disorder (OCD), and other mood disorders.',
          category_id: 7,
          manufacturer: 'Manufacturer G',
          dosage: 'Take 1 capsule daily in the morning',
          product_code: 'STU901'
        },
        {
          name: 'Ondansetron',
          unit: 'Tablet',
          strength: '4mg',
          description: 'Ondansetron is an antiemetic medication used to prevent nausea and vomiting caused by chemotherapy, radiation therapy, and surgery.',
          category_id: 8,
          manufacturer: 'Manufacturer H',
          dosage: 'Take 1 tablet 1 hour before chemotherapy',
          product_code
      
      : 'VWX234'
        },
        {
          name: 'Metformin',
          unit: 'Tablet',
          strength: '500mg',
          description: 'Metformin is an oral antidiabetic drug used to control blood sugar levels in people with type 2 diabetes.',
          category_id: 9,
          manufacturer: 'Manufacturer I',
          dosage: 'Take 1 tablet twice a day with meals',
          product_code: 'YZA567'
        },
        {
          name: 'Warfarin',
          unit: 'Tablet',
          strength: '5mg',
          description: 'Warfarin is an anticoagulant medication used to prevent blood clots in conditions such as deep vein thrombosis (DVT) and atrial fibrillation (AFib).',
          category_id: 10,
          manufacturer: 'Manufacturer J',
          dosage: 'Take as directed by your doctor',
          product_code: 'BCD890'
        },
        {
          name: 'Lisinopril',
          unit: 'Tablet',
          strength: '10mg',
          description: 'Lisinopril is an angiotensin-converting enzyme (ACE) inhibitor used to treat high blood pressure and heart failure.',
          category_id: 11,
          manufacturer: 'Manufacturer K',
          dosage: 'Take 1 tablet daily',
          product_code: 'EFG123'
        },
        {
          name: 'Furosemide',
          unit: 'Tablet',
          strength: '40mg',
          description: 'Furosemide is a loop diuretic used to treat edema (fluid retention) and high blood pressure by increasing urine production.',
          category_id: 12,
          manufacturer: 'Manufacturer L',
          dosage: 'Take 1 tablet in the morning',
          product_code: 'HIJ456'
        },
        {
          name: 'Senokot',
          unit: 'Tablet',
          strength: '8.6mg',
          description: 'Senokot is a stimulant laxative used to relieve occasional constipation by promoting bowel movements.',
          category_id: 13,
          manufacturer: 'Manufacturer M',
          dosage: 'Take 2 tablets at bedtime',
          product_code: 'KLM789'
        },
        {
          name: 'Flexeril',
          unit: 'Tablet',
          strength: '10mg',
          description: 'Flexeril is a muscle relaxant used to relieve muscle spasms and discomfort associated with musculoskeletal conditions.',
          category_id: 14,
          manufacturer: 'Manufacturer N',
          dosage: 'Take 1 tablet three times a day',
          product_code: 'OPQ012'
        },
        {
          name: 'Atenolol',
          unit: 'Tablet',
          strength: '50mg',
          description: 'Atenolol is a beta-blocker medication used to treat high blood pressure, chest pain (angina), and certain heart rhythm disorders.',
          category_id: 15,
          manufacturer: 'Manufacturer O',
          dosage: 'Take 1 tablet daily',
          product_code: 'RST345'
        },
        {
          name: 'Ambien',
          unit: 'Tablet',
          strength: '10mg',
          description: 'Ambien is a sedative-hypnotic medication used for the short-term treatment of insomnia (difficulty falling asleep or staying asleep).',
          category_id: 16,
          manufacturer: 'Manufacturer P',
          dosage: 'Take 1 tablet at bedtime as needed',
          product_code: 'UVW678'
        },
        {
          name: 'Levothyroxine',
          unit: 'Tablet',
         
      
       strength: '100mcg',
          description: 'Levothyroxine is a thyroid hormone supplement used to replace or supplement the thyroid hormone in the body and treat hypothyroidism.',
          category_id: 17,
          manufacturer: 'Manufacturer Q',
          dosage: 'Take 1 tablet daily in the morning',
          product_code: 'XYZ901'
        },
        {
          name: 'Albuterol',
          unit: 'Inhaler',
          strength: '90mcg/dose',
          description: 'Albuterol is a bronchodilator medication used to relieve bronchospasm and improve breathing in conditions such as asthma and chronic obstructive pulmonary disease (COPD).',
          category_id: 18,
          manufacturer: 'Manufacturer R',
          dosage: 'Inhale 1-2 puffs every 4-6 hours as needed',
          product_code: 'ABC234'
        },
        {
          name: 'Mupirocin',
          unit: 'Ointment',
          strength: '2%',
          description: 'Mupirocin is a topical antibiotic ointment used to treat skin infections such as impetigo and certain types of wound infections.',
          category_id: 19,
          manufacturer: 'Manufacturer S',
          dosage: 'Apply a small amount to the affected area 3 times a day',
          product_code: 'DEF567'
        },
        {
          name: 'Multivitamin',
          unit: 'Tablet',
          strength: '-',
          description: 'Multivitamin is a dietary supplement that contains a combination of essential vitamins and minerals to support overall health and fill nutrient gaps.',
          category_id: 20,
          manufacturer: 'Manufacturer T',
          dosage: 'Take 1 tablet daily with a meal',
          product_code: 'GHI890'
        }
      ];
      // Add more medications with their respective details, descriptions, manufacturers, dosages, and product codes
    await Medications.bulkCreate(medicineData);
    console.log('Categories data inserted successfully.');
  } catch (error) {
    console.error('Failed to insert categories data:', error);
  } finally {
    sequelize.close(); // Close the database connection after inserting data
  }
}
