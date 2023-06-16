const Category = require('../models/category');

const createCategory = async (req, res) => {
    try {
        const category = await Category.create(req.body);
        res.status(201).json({ category });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.status(200).json({ categories });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getCategoryById = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Category.findOne({
            where: { id: id }
        });
        if (category) {
            res.status(200).json({ category });
        } else {
            res.status(404).json({ error: 'Category not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await Category.update(req.body, {
            where: { id: id }
        });
        if (updated) {
            const updatedCategory = await Category.findOne({ where: { id: id } });
            return res.status(200).json({ category: updatedCategory });
        }
        return res.status(404).json({ error: 'Category not found' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Category.destroy({
            where: { id: id }
        });
        if (deleted) {
            return res.status(204).json({msg: "Category deleted"});
        }
        throw new Error("Category not found");
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory
}