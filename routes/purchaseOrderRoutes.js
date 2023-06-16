const purchaseOrderController = require('../controllers/purchaseOrderController');
const express = require('express');
const router = express.Router();

router.get('/', purchaseOrderController.createPurchaseOrder);
router.get('/list', purchaseOrderController.getAllPurchaseOrders);
router.get('/:id', purchaseOrderController.getPurchaseOrderById);
router.put('/:id', purchaseOrderController.updateStatus);
router.delete('/:id', purchaseOrderController.deletePurchaseOrder);

module.exports = router;
