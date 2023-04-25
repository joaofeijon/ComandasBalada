//express
const express = require("express")
const router = express.Router()

//modles
const Comandas = require("./Comandas")

router.get("/comandas", (req, res) => {
    Comandas.findAll().then((resultado) => {
        res.json(resultado)
    })
})

router.get("/comandas/:id", (req, res) => {
    let id = req.params.id
    if(id !=undefined){

        Comandas.findOne({where: {id: id}}).then((resultado) => {
            res.json(resultado)
        })

    }

})

router.post("/comandas/save", (req, res) => {
    let valor = req.body.valor
    let pago = req.body.pago
    let idUser = req.body.idUser
    if(valor != undefined || pago != undefined || idUser != undefined){
        Comandas.create({
            valor: valor,
            pago: pago,
            idUser: idUser
        })
    
        res.send("Criado com Sucesso")
    }


})

router.post("/comandas/update", (req, res) => {
    let id = req.body.id
    let valor = req.body.valor
    let pago = req.body.pago
    let idUser = req.body.idUser 

    if(id != undefined){

        Comandas.update({ valor: valor, pago: pago, idUser: idUser }, { where: {id: id} }).then(() => {
            res.send("edicao concluída")
        })

    }

})

router.post("/comandas/delete", (req, res) => {
    let id = req.body.id

    if(id != undefined){
        Comandas.destroy({ where: {id: id}}).then(() =>{
            res.send(`Id: ${id} deletado`)
        })
    }
})


module.exports = router