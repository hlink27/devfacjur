const Sequelize = require('sequelize')
const database = 'facilita'
const username = 'anon'
const password = '521478'
const sequelize = new Sequelize(database, username, password, {
    host: 'localhost',
    dialect: 'postgres',
    schema: 'facilita',
  });
module.exports = sequelize