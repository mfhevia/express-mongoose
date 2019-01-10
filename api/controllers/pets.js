const petSchema = require('./schemas/pets');
const { celebrate } = require('celebrate');

module.exports = (router, models) => {

    router.get('/pets', async (req, res, next) => {
        
        res.json({            
            pets: await models.pets.find()
        });
    });

    router.post('/pets', celebrate(petSchema), (req, res, next) => {

        models.pets.create(req.body)
            .then(newPet => res.json(newPet))
            .catch(err => res.json(err))                      
    })
}