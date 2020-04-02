const express = require('express');
const crypto = require('crypto'); // utilizado para gerenciar quem pode acessar o sistema
const {celebrate, Segments, Joi} =require('celebrate')

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
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email : Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
        password:Joi.string().required(),
    })
}),ongControler.create);

//rotas relacionadas aos incidentes
routes.post('/incidents', IncidentController.create);


routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page : Joi.number(),
    })
}), IncidentController.index);


routes.delete('/incidents/:id',celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}),IncidentController.delete);


routes.get('/profile',celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}) , ProfileController.index);


module.exports = routes;