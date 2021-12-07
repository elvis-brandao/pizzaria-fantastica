const pizzas = require('../database/Pizzas.json');
const fs = require('fs');
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
    },
    store: (req, res) => {
        const nome = req.body.nome;
        const ingredientes = req.body.ingredientes.split(',').map( a => a.trim());
        const preco = Number(req.body.preco);
        const id = pizzas[pizzas.length -1].id + 1;
        
        const pizza = {id, nome, ingredientes, preco, img: ''};
        pizzas.push(pizza);

        //Salvar o json do array de pizzas no arquivo Pizzas.json
        fs.writeFileSync(__dirname + '/../database/Pizzas.json', JSON.stringify(pizzas, null, 4), {flag: 'w'});

        //Direcionar o usuário para a página que exibe a lista de pizzas
        res.redirect('/');
    }
};

module.exports = controller;