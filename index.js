// Importar o express
const express = require('express');

//Importar o express-session
const session = require('express-session');

//Importando o roteadores
const PizzasRouter = require('./routers/PizzasRouter');
const AdmRouter = require('./routers/AdmRouter');

// Criar uma aplicação em express
const app = express();
app.set("view engine", "ejs");
app.set("views", "./views");

//Configurado o processamento de formulários
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Chamando a função session
app.use(session({secret: "SEGREDO"}));

//Configurar a pasta public
app.use(express.static(__dirname + "/public"));

// Fazer com que a aplicação express atenda a uma requisição
app.use('/', PizzasRouter);
app.use('/adm', AdmRouter);

// Levantar a aplicação (fazer com que a applicação fique de prontidão)
app.listen(3000, ()=>{console.log("Servidor roando na porta 3000...")});