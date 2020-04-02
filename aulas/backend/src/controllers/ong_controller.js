const connection = require('../database/connection');
const GenereteId = require('../utils/genereteid');
const bcrypt = require('bcrypt');

module.exports = {
    async index(request,response){ //responsável por listar 
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
    },
    
    async create(request,response){ //responsável por crear uma ong
        var {name,email,whatsapp,city,uf,password}= request.body;
        
        const id = GenereteId();
         bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(password,salt,async (err,hash)=>{// configuração do hash da senha, para dar mais segurança para o site
               console.log(password);
                var password=hash;
                console.log(password);
                await connection('ongs').insert({
                    id,
                    name,
                    email,
                    whatsapp,
                    city,
                    uf,
                    password
                });
        
            
                return response.json({id});
            })

        })
        
        
    }
}