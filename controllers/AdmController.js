const session = require('express-session');

const controller = {
    showLogin: (req, res) => {
        res.render('login');
    },
    login: (req, res) => {
        const usuarios = require('../database/Usuarios.json');
        const {email, senha} = req.body;

        const usuario = usuarios.find( u => u.email == email && u.senha == senha);

        if(usuario === undefined){
            return res.send('Senha ou email inválidos');
        }

        req.session.usuario = usuario;
        res.redirect('/adm/pizzas/create');
    },
    logout: (req, res) => {
        if(req.session.usuario !== undefined){
            req.session.usuario = undefined;
        }
        res.redirect('/adm/login');
    }
}

module.exports = controller;