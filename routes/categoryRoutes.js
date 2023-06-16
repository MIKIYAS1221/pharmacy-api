const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/categorycontroller');

router.post('/create', categoryController.createCategory);
router.get('/all', categoryController.getAllCategories);
router.get('/find/:id', categoryController.getCategoryById);
router.put('/update/:id', categoryController.updateCategory);
router.delete('/delete/:id', categoryController.deleteCategory);

module.exports = router;
