const pizzas = require('../database/Pizzas.json');
const controller = {
    listar: (req, res) => {
        res.render('index', {pizzas, busca: ''});
    },
    getPizza: (req, res) => {
        let idPizza = req.params.id;
        const pizza = pizzas.find(p => p.id == idPizza);
        res.render('pizza.ejs', {pizza});
    },
    busca: (req, res) => {
        let filtro = req.query.q;
        let pizzaFiltro = pizzas.filter(p => p.nome.toUpperCase().includes(filtro.toUpperCase()));
        res.render('index', {pizzas: pizzaFiltro, busca: filtro});
    },
    create: (req, res) => {
        res.render('crud-pizzas/create');
    }
};

module.exports = controller;