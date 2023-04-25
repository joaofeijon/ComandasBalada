const Express = require("express")
const app = Express()
const PORT = 3000

//Body Parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//http user
const user = require("./users/usercontroll")
app.use("/", user)

//http comandas
const comanda = require("./comandas/comandasControll")
app.use("/", comanda)

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))