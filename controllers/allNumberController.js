// get all table data count from database

const sequelize = require('../config/database');
const { QueryTypes } = require('sequelize');

const getAllTableDataCount = async (req, res) => {
    try {
        const allTableDataCount = await sequelize.query(
            `SELECT table_name, table_rows
            FROM INFORMATION_SCHEMA.TABLES
            WHERE TABLE_SCHEMA = 'db'`,
            { type: QueryTypes.SELECT }
        );
        res.status(200).json({ allTableDataCount });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getAllTableDataCount
}