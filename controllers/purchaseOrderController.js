const Supplier = require('../models/Supplier');
const PurchaseOrder = require('../models/PurchaseOrder');

const createPurchaseOrder = async (req, res) => {
    try {
        const purchaseOrder = await PurchaseOrder.create(req.body);
        res.status(201).json({ purchaseOrder });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getAllPurchaseOrders = async (req, res) => {
    try {
        const purchaseOrders = await PurchaseOrder.findAll();
        res.status(200).json({ purchaseOrders });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getPurchaseOrderById = async (req, res) => {
    try {
        const { id } = req.params;
        const purchaseOrder = await PurchaseOrder.findOne({
            where: { id: id }
        });
        if (purchaseOrder) {
            res.status(200).json({ purchaseOrder });
        } else {
            res.status(404).json({ error: 'PurchaseOrder not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await PurchaseOrder.update(req.body, {
            where: { id: id }
        });
        if (updated) {
            const updatedPurchaseOrder = await PurchaseOrder.findOne({ where: { id: id } });
            return res.status(200).json({ purchaseOrder: updatedPurchaseOrder });
        }
        return res.status(404).json({ error: 'PurchaseOrder not found' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const deletePurchaseOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await PurchaseOrder.destroy({
            where: { id: id }
        });
        if (deleted) {
            return res.status(204).json({msg: "PurchaseOrder deleted"});
        } else {
            throw new Error("PurchaseOrder not found");
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createPurchaseOrder,
    getAllPurchaseOrders,
    getPurchaseOrderById,
    updateStatus,
    deletePurchaseOrder
}