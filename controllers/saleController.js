const Sale = require('../models/Sale');
const Patient = require('../models/Patient');
const Medication = require('../models/Medication');


const createSale = async (req, res) => {
    try {
        const sale = await Sale.create(req.body);
        res.status(201).json({ sale });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getAllSales = async (req, res) => {
    try {
        const sales = await Sale.findAll({
            include: [
                {
                    model: Patient,
                    attributes: ['fname', 'sname'],
                },
                {
                    model: Medication,
                    attributes: ['name'],
                },
            ],
        });
        res.status(200).json({ sales });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getSaleById = async (req, res) => {
    try {
        const { id } = req.params;
        const sale = await Sale.findOne({
            where: { id: id },
            include: [
                {
                    model: Patient,
                    attributes: ['fname', 'sname'],
                },
                {
                    model: Medication,
                    attributes: ['name'],
                },
            ],
        });
        if (sale) {
            res.status(200).json({ sale });
        } else {
            res.status(404).json({ error: 'Sale not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateSale = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await Sale.update(req.body, {
            where: { id: id }
        });
        if (updated) {
            const updatedSale = await Sale.findOne({ where: { id: id } });
            return res.status(200).json({ sale: updatedSale });
        }
        return res.status(404).json({ error: 'Sale not found' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const deleteSale = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Sale.destroy({
            where: { id: id }
        });
        if (deleted) {
            return res.status(204).send("Sale deleted");
        }
        throw new Error("Sale not found");
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createSale,
    getAllSales,
    getSaleById,
    updateSale,
    deleteSale
}