const Pizzas = require('../database/Pizzas.json');
const controller = {
    listar: (req, res) => {res.send(Pizzas)},
    getPizza: (req, res) => {
        let idPizza = req.params.id;
        const pizza = Pizzas.find(p => p.id == idPizza);
        res.render('pizza.ejs', {pizza});
    }
};

module.exports = controller;