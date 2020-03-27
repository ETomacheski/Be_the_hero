const express =  require('express');
const routes = require('./routes');
const cors = require('cors');
const {errors} = require('celebrate');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());



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