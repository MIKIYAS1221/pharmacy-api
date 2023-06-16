//crud for supplier controller

const Supplier = require('../models/Supplier');
const SupplierPhone = require('../models/SupplierPhone');

const createSupplier = async (req, res) => {
    try {
        const supplier = await Supplier.create(req.body);
        const phone = await SupplierPhone.create({
            phone: req.body.phone,
            supplier_id: supplier.id,
        });
        const newSpplier = await Supplier.findOne({
            where: { id: supplier.id },
            include: [
                {
                    model: SupplierPhone,
                    attributes: ['phone'],
                },
            ],
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getAllSuppliers = async (req, res) => {
    try {
        const suppliers = await Supplier.findAll({
            include: [
                {
                    model: SupplierPhone,
                    attributes: ['phone'],
                },
            ],
        });
        res.status(200).json({ suppliers });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getSupplierById = async (req, res) => {
    try {
        const { id } = req.params;
        const supplier = await Supplier.findOne({
            where: { id: id },
            include: [
                {
                    model: SupplierPhone,
                    attributes: ['phone'],
                },
            ],
        });
        if (supplier) {
            res.status(200).json({ supplier });
        } else {
            res.status(404).json({ error: 'Supplier not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateSupplier = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await Supplier.update(req.body, {
            where: { id: id }
        });
        if (updated) {
            const updatedSupplier = await Supplier.findOne({ where: { id: id } });
            return res.status(200).json({ supplier: updatedSupplier });
        }
        return res.status(404).json({ error: 'Supplier not found' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const deleteSupplier = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Supplier.destroy({
            where: { id: id }
        });
        if (deleted) {
            return res.status(204).json({ msg: "Supplier deleted" });
        }
        throw new Error("Supplier not found");
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}


module.exports = {
    createSupplier,
    getAllSuppliers,
    getSupplierById,
    updateSupplier,
    deleteSupplier
}