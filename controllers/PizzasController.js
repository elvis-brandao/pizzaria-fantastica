const Pizzas = require('../database/Pizzas.json')
const controller = {
    listar: (req, res) => {res.send(Pizzas)}
}

module.exports = controller;