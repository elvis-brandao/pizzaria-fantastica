//Importar o express
const express = require('express');

//Importar o validador
const ValidadorDeFormPizza = require('../middlewares/ValidadorDeFormPizza');

//Importar o multer
const multer = require('multer');
const storage = multer.diskStorage(
    {
        destination: (req, file, cb) => {cb(null,__dirname + '/../public/img')},
        filename: (req, file, cb) => {cb(null, Date.now() + '-' + file.originalname)}
    }
);
const upload = multer({storage});

//Importar o PizzasController
 const PizzasController = require('../controllers/PizzasController');

//Importar o AdmController
const AdmController = require('../controllers/AdmController');

//Importando o Middleware de verificação de logado
const UsuarioLogado = require('../middlewares/UsuarioLogado');
const SemLogin = require('../middlewares/SemLogin');

//Criar o roteador
const router = express.Router();

//Definir rotas às quais ele responderá
router.get('/pizzas/create', UsuarioLogado ,PizzasController.create);
router.post('/pizzas/create', upload.single('img'), ValidadorDeFormPizza, PizzasController.store);
router.get('/login', SemLogin, AdmController.showLogin);
router.post('/login', AdmController.login);
router.get('logout', AdmController.logout)

//Exportar o roteador
module.exports = router;