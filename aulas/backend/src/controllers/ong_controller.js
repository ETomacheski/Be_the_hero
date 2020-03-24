const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index(request,response){ //responsável por listar 
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
    },
    
    async create(request,response){ //responsável por crear uma ong
        const {name,email,whatsapp,city,uf}= request.body;
        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });

    
        return response.json({id});
    }
}