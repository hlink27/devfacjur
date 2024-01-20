const Sequelize = require('sequelize')
const sequelize = require('../util/database')

const Client = sequelize.define('client', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    tel: Sequelize.STRING,
    addressX: Sequelize.INTEGER,
    addressY: Sequelize.INTEGER
})

module.exports = Client