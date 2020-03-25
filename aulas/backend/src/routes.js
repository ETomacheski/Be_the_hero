const express = require('express');
const crypto = require('crypto'); // utilizado para gerenciar quem pode acessar o sistema


//require dos sistema
const ongControler = require('./controllers/ong_controller');
const IncidentController = require('./controllers/incidents_controller');
const ProfileController = require('./controllers/profile_controller');
const SessionController = require('./controllers/session_controller');

//define routes
const routes = express.Router();

//rota login
routes.post('/session',SessionController.create);

//rotas relacionadas as ongs
routes.get('/ongs', ongControler.index);
routes.post('/ongs', ongControler.create);

//rotas relacionadas aos incidentes
routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id',IncidentController.delete);
routes.get('/profile', ProfileController.index);


module.exports = routes;