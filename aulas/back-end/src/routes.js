const express = require('express');
const crypto = require('crypto');

const ongControler = require('./controllers/ong_controller');

const IncidentController = require('./controllers/incidents_controller');
const ProfileController = require('./controllers/profile_controller');
const SessionController = require('./controllers/session_controller');

const routes = express.Router();

routes.post('/session/:page',SessionController.create);

routes.get('/ongs', ongControler.index);

routes.post('/ongs', ongControler.create);

routes.post('/incidents', IncidentController.create);

routes.get('/incidents', IncidentController.index);

routes.delete('/incidents/:id',IncidentController.delete);
routes.get('/profile', ProfileController.index);
module.exports = routes;