const Sequelize = require("sequelize")
const sequelize = require("../database/database")

const users = sequelize.define("users",{ 
    nome: { 
        type: Sequelize.TEXT 
    }, 
    nascimento: { 
        type: Sequelize.TEXT 
    } 
})

//users.sync({force: true})//executa so uma vez

module.exports = users