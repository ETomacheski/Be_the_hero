const generateID = require('../../src/utils/genereteid')
;
describe('Generete ID',()=>{
    it('should generate an unique ID',() => {
        const id = generateID()
        expect(id).toHaveLength(8);
    })
})