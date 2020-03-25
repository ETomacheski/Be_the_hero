const connection = require('../database/connection');
module.exports = {
    async create(request, response){ //responsável pelo login
        
        const {id} = request.body;
        console.log(id)
        const ong = await connection('ongs').where('id',id).select('name').first();

        if(!ong){
            return response.status(400).json({error : 'No ONG found whith this ID'});
        }
        return response.json(ong);
    }
}