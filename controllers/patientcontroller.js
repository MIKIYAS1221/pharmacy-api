const Patient = require('../models/Patient');
const PatientPhone = require('../models/PatientPhone');

const createPatient = async (req, res) => {
    try {
        const patient = await Patient.create(req.body);
        const phone = await PatientPhone.create({
            phone: req.body.phone,
            patient_id: patient.id,
        });
        const newPatient = await Patient.findOne({
            where: { id: patient.id },
            include: [
                {
                    model: PatientPhone,
                    attributes: ['phone'],
                },
            ],
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getAllPatients = async (req, res) => {
    try {
        const patients = await Patient.findAll({
            include: [
                {
                    model: PatientPhone,
                    attributes: ['phone'],
                },
            ],
        });
        res.status(200).json({ patients });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getPatientById = async (req, res) => {

    try{
        const { id } = req.params;
        const patient = await Patient.findOne({
            where: { id: id },
            include: [
                {
                    model: PatientPhone,
                    attributes: ['phone'],
                },
            ],
        });
        if (patient) {
            res.status(200).json({ patient });
        } else {
            res.status(404).json({ error: 'Patient not found' });
        }
    }
    catch(error){
        res.status(500).json({ error: error.message });
    }
}

const deletePatient = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Patient.destroy({
            where: { id: id }
        });
        if (deleted) {
            return res.status(204).json({msg: "Patient deleted"});
        }
        return res.status(404).json({ error: 'Patient not found' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createPatient,
    getAllPatients,
    getPatientById,
    deletePatient
}
