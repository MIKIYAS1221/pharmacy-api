//create routes for roles
const express = require('express');
const router = express.Router();
const roleController = require('../controllers/roleController');

router.post('/create', roleController.createRole);
router.get('/all', roleController.getAllRoles);
router.get('/find/:id', roleController.getRoleById);
router.put('/update/:id', roleController.updateRole);
router.delete('/delete/:id', roleController.deleteRole);

module.exports = router;

