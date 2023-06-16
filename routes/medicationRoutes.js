const medicationController = require('../controllers/medicationController');
const express = require('express');

const router = express.Router();

router.get('/', medicationController.createMedication);
router.get('/list', medicationController.getAllMedications);
router.get('/:id', medicationController.getMedicationById);
router.put('/:id', medicationController.updateMedication);
router.delete('/:id', medicationController.deleteMedication);

module.exports = router;
