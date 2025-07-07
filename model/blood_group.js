const { DataTypes } = require('sequelize');
const sequelize = require('../db'); // adjust path to your sequelize instance

const BloodGroup = sequelize.define('BloodGroup', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    group_name: {
        type: DataTypes.STRING(10),
        allowNull: false,
        unique: true
    },
    description: {
        type: DataTypes.STRING(255)
    }
}, {
    tableName: 'blood_group',
    timestamps: false
});

module.exports = BloodGroup;