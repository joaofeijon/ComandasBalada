const Sequelize = require("sequelize")
const sequelize = require("../database/database")

const User =  require("../users/users")

const Comandas = sequelize.define("comandas",{ 
    valor: { 
        type: Sequelize.FLOAT 
    }, 
    pago: { 
        type: Sequelize.BOOLEAN 
    },
})

Comandas.belongsTo(User, {
    constraint: true,
    foreignKey: "idUser"
})

//Comandas.sync({force: true})//executa so uma vez

module.exports = Comandas