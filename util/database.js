const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('group_chat', 'root','Punit@1415',{
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;