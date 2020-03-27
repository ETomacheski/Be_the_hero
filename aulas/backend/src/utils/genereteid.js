const crypto = require('crypto');
module.exports =  function genereteId (){
    return crypto.randomBytes(4).toString('HEX');
}