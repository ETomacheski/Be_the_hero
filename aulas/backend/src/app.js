const express =  require('express');
const routes = require('./routes');
const cors = require('cors');
const {errors} = require('celebrate');
const session = require("express-session");
const passport = require("passport");


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

app.use(session({
    secret: "sistema",
    resave: true,
    saveUnitialized: true

}))

app.use(passport.initialize())
app.use(passport.session())

/*  // comentarios sobre o video
Metodos 
GET buscar ou listar algo no backend
Post Create algo no backend
PUT Alterar algo no backend
DELETE deletar algo no backend
*/

/*
Tipos de parametros

* Query params: Paramentro enviados na rota apos o simbolo de interogação, filtro, paginasão
req.query
* Route params: Parametros utilizados para indentificar recursos
req.params
* Request body: 
req.body
*/



module.exports = app;