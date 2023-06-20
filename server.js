const express = require('express');
const app = express();
const sequelize = require('./config/database');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

// Import all models dynamically
const modelsPath = path.join(__dirname, 'models');
fs.readdirSync(modelsPath).forEach(file => {
  require(path.join(modelsPath, file));
});


// Middleware
app.use(express.json());
app.use(cors());

// Add other routes...
app.use('/roles', require('./routes/roleRoutes'));
app.use('/users', require('./routes/userRoutes'));
app.use('/categories',require('./routes/categoryRoutes'));
app.use('/medications',require('./routes/medicationRoutes'));
app.use('/sales',require('./routes/saleRoutes'));
app.use('/purchaseorders',require('./routes/purchaseOrderRoutes'));
app.use('/patients',require('./routes/patientRoutes'));
app.use('/suppliers',require('./routes/supplierRoutes'));
app.use('/allNumber',require('./routes/allNumberRoutes'));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// Sync database models and start the server
sequelize
  .sync()
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
