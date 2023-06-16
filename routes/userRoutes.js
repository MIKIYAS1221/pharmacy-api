const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.post('/create', userController.createUser);
router.post('/role/:id', userController.giveRole);
router.get('/all', userController.getAllUsers);
router.delete('/delete/:id', userController.deleteUser);

module.exports = router;