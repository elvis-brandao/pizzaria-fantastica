// Importar o express
const express = require('express');

//Importando o roteadores
const PizzasRouter = require('./routers/PizzasRouter');
const AdmRouter = require('./routers/AdmRouter');

// Criar uma aplicação em express
const app = express();
app.set("view engine", "ejs");
app.set("views", "./views");

//Configurar a pasta public
app.use(express.static(__dirname + "/public"));

// Fazer com que a aplicação express atenda a uma requisição
app.use('/', PizzasRouter);
app.use('/adm', AdmRouter);

// Levantar a aplicação (fazer com que a applicação fique de prontidão)
app.listen(3000, ()=>{console.log("Servidor roando na porta 3000...")});