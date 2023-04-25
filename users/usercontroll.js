//express
const express = require("express")
const router = express.Router()

//modles
const User = require("./users")
const Comandas = require("../comandas/Comandas")

router.get("/users", (req, res) => {
    User.findAll().then((users) => {
        res.json(users)
    })
})

router.get("/user/:id", (req, res) => {
    let id = req.params.id
    if(id != undefined){
        User.findOne({where: {id: id}}).then((resultado) => {
            res.json(resultado)
        })
    }

})

router.get("/user/comandas/:id", (req, res) => {
    let id = req.params.id

    Comandas.findAll({where: {idUser: id}}).then((resultado) => {
        res.json(resultado)
    })
})

router.post("/user/update", (req, res) => {
    let id = req.body.id
    let nome = req.body.nome
    let nascimento = req.body.nascimento
    if(id != undefined){

        User.update({ nome: nome, nascimento: nascimento }, { where: {id: id} }).then(() => {
            res.send("edicao concluída")
        })

    }

})

router.post("/user/save", (req, res) => {
    let nome = req.body.nome
    let nascimento = req.body.nascimento

    if(nome != undefined || nascimento != undefined){
        User.create({
            nome: nome,
            nascimento: nascimento
        })
   
       res.send("cliente cadastro")
    }

})

router.post("/user/delete", (req, res) => {
    let id = req.body.id

    if(id != undefined){
        User.destroy({ where: {id: id}}).then(() =>{
            res.send(`Id: ${id} deletado`)
        })
    }
})

module.exports = router