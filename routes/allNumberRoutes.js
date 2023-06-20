const express = require('express');
const router = express.Router();
const allNumberController = require('../controllers/allNumberController');

router.get('/', allNumberController.getAllTableDataCount);

module.exports = router;