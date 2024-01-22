const Sequelize = require('sequelize')
const database = ''
const username = ''
const password = ''
const sequelize = new Sequelize(database, username, password, {
    host: 'localhost',
    dialect: 'postgres',
    schema: database,
  });
module.exports = sequelize
