// crud for role controller 
const Role = require('../models/Role');

const createRole = async (req, res) => {
    try {
        const role = await Role.create(req.body);
        res.status(201).json({ role });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getAllRoles = async (req, res) => {
    try {
        const roles = await Role.findAll();
        res.status(200).json({ roles });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getRoleById = async (req, res) => {
    try {
        const { id } = req.params;
        const role = await Role.findOne({
            where: { id: id }
        });
        if (role) {
            res.status(200).json({ role });
        } else {
            res.status(404).json({ error: 'Role not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateRole = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await Role.update(req.body, {
            where: { id: id }
        });
        if (updated) {
            const updatedRole = await Role.findOne({ where: { id: id } });
            return res.status(200).json({ role: updatedRole });
        }
        return res.status(404).json({ error: 'Role not found' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const deleteRole = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Role.destroy({
            where: { id: id }
        });
        if (deleted) {
            return res.status(204).json({msg: "Role deleted"});
        }
        return res.status(404).json({ error: "Role not found" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createRole,
    getAllRoles,
    getRoleById,
    updateRole,
    deleteRole
}

