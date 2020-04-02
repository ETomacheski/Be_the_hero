const connection = require('../database/connection');
const bcrypt = require('bcrypt');
const localStrategy = require("passport-local").Strategy
module.exports = {
    async create(request, response){ //responsável pelo login
        
        const {email} = request.body;
        const {password} = request.body;
        console.log(email);
        console.log(password);
        const ong = await connection('ongs').where('email',email).select('password','name','id').first();
        //const name_ong = await connection('ongs').where('email',email).select('name').first();
        
        
        
        if(!ong){
           
            return response.status(400).json({error : 'ONG is not defined'});
            
        }
        
        bcrypt.compare(password,ong.password,(erro,batem)=>{ // funçãp do bcrypt para compar as duas senhas e ver se batem
            if (batem) {
                
                return response.json({id : ong.id , name : ong.name });
            }else{
                return response.status(400).json({error : 'incorrect password'});
            }
        })
    }
}