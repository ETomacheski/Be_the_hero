const request = require('supertest');
const app = require('../../src/app');
const connection = require('./../../src/database/connection');

// para setar o algo no header usar .set()
describe('ONG',( )=>{

    beforeEach( async() => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    })
    afterAll( async()=>{
        await connection.destroy();
    })
    it('Should be able to create a new ONG',async ()=>{
        const response = await request(app)
        .post('/ongs')
        .send(
            {
                name : "AMICAO",
                email: "contato@apad.com",
                whatsapp:"51994027515",
                city: "Charqueadas",
                uf:"RS"
            });
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
        
    });
});