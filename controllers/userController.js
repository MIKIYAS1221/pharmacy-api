// user controller 

const User = require('../models/User');
const UserPhone = require('../models/UserPhone');
const Role = require('../models/Role');

const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body.user);
        const phone = await UserPhone.create({
            phone: req.body.phone,
            user_id: user.user_id,
        });
        const newUser = await User.findOne({
            where: { user_id: user.user_id },
            include: [
                {
                    model: UserPhone,
                    attributes: ['phone'],
                },
            ],
        });
        res.status(201).json({ newUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({
            where: { email: email, password: password },
            include: [
                {
                    model: Role,
                    attributes: ['type'],
                },
                {
                    model: UserPhone,
                    attributes: ['phone'],
                },
            ],
        });
        if (user) {
            res.status(200).json({ user });
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
        

//give user a role
const giveRole = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findOne({
            where: { user_id: id },
        });
        if (user) {
            const role = await Role.findOne({
                where: { id: req.body.role_id },
            });
            if (role) {
                user.role_id = role.id;
                res.status(200).json({ user });
            } else {
                res.status(404).json({ error: 'Role not found' });
            }
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            include: [
                {
                    model: Role,
                    attributes: ['type'],
                },
                {
                    model: UserPhone,
                    attributes: ['phone'],
                },
            ],
        });
        res.status(200).json({ users });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findOne({
            where: { user_id: id },
            include: [
                {
                    model: Role,
                    attributes: ['type'],
                },
                {
                    model: UserPhone,
                    attributes: ['phone'],
                },
            ],
        });
        if (user) {
            res.status(200).json({ user });
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await User.destroy({
            where: { user_id: id }
        });
        if (deleted) {
            res.status(204).send("User deleted");
        }
        else {
            res.status(404).json({ error: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createUser,
    login,
    giveRole,
    getAllUsers,
    getUserById,
    deleteUser
}