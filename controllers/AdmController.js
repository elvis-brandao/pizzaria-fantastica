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

        return res.send('ok! Tudo certo...');
    }
}

module.exports = controller;