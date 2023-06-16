const patientController = require('../controllers/patientcontroller');
const express = require('express');
const router = express.Router();

router.get('/', patientController.createPatient);
router.get('/list', patientController.getAllPatients);
router.get('/:id', patientController.getPatientById);
router.delete('/:id', patientController.deletePatient);

module.exports = router;