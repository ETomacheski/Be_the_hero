const connection = require('../database/connection');
module.exports = {

    async index(request,response){//responsavel por listar casos específicos de uma ong
        const ong_id = request.headers.authorization;

        const incidentes = await connection('incidents').where('ong_id',ong_id).select('*');

        return response.json(incidentes);

       
    }
}