const saleController = require('../controllers/saleController');
const express = require('express');

const router = express.Router();

router.get('/', saleController.createSale);
router.get('/list', saleController.getAllSales);
router.get('/:id', saleController.getSaleById);
router.put('/:id', saleController.updateSale);
router.delete('/:id', saleController.deleteSale);


module.exports = router;
