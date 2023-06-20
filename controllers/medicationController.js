const Medication = require('../models/Medication');
const Category = require('../models/Category');
const Inventory = require('../models/Inventory');   

const createMedication = async (req, res) => {
    try {
        const medication = await Medication.create(req.body.user);
        const inventory = await Inventory.create(req.body.inventory);
        const newMedication = await Medication.findOne({
            where: { medication_id: medication.medication_id },
            include: [
                {
                    model: Inventory,
                    attributes: ['Quantity', 'record_threshold', 'expiry_date'],
                },
                {
                    model: Category,
                    attributes: ['name'],
                }
            ],
        });
        res.status(201).json({ medication });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getAllMedications = async (req, res) => {
    try {
        const medications = await Medication.findAll({
            include: [
                {
                    model: Category,
                    attributes: ['name'],
                },
                {
                    model: Inventory,
                    attributes: ['Quantity', 'record_threshold', 'expiry_date'],
                }
            ],
        });
        res.status(200).json({ medications });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getMedicationById = async (req, res) => {
    try {
        const { id } = req.params;
        const medication = await Medication.findOne({
            where: { id: id },
            include: [
                {
                    model: Category,
                    attributes: ['name'],
                },
                {
                    model: Inventory,
                    attributes: ['Quantity', 'record_threshold', 'expiry_date'],
                }
            ],
        });
        if (medication) {
            res.status(200).json({ medication });
        } else {
            res.status(404).json({ error: 'Medication not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateMedication = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await Medication.update(req.body, {
            where: { id: id }
        });
        if (updated) {
            const updatedMedication = await Medication.findOne({ where: { id: id } });
            return res.status(200).json({ medication: updatedMedication });
        }
        return res.status(404).json({ error: 'Medication not found' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const deleteMedication = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Medication.destroy({
            where: { id: id }
        });
        const deletedInventory = await Inventory.destroy({
            where: { medication_id: id }
        });
        if (deleted) {
            return res.status(204).json({msg: "Medication deleted"});
        }
        throw new Error("Medication not found");
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createMedication,
    getAllMedications,
    getMedicationById,
    updateMedication,
    deleteMedication
}