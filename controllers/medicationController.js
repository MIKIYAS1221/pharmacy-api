const Medication = require('../models/Medication');
const Category = require('../models/Category');

const createMedication = async (req, res) => {
    try {
        const medication = await Medication.create(req.body);
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