const { DataTypes } = require('sequelize')
const database = require('../utils/database')

const Characters = database.define('characters', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    img_url: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Characters