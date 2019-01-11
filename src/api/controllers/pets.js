const { celebrate } = require('celebrate');
const {petSchema, petIdSchema } = require('./schemas/pets');

module.exports = (router, models) => {
  router.get('/pets', async (req, res) => {
    res.json({
      pets: await models.pets.find(),
    });
  });

  router.get('/pets/:id', celebrate(petIdSchema), (req, res) => {
    models.pets.findById(req.params.id)
      .then(pet => {
        if (!pet) {
          res.boom.notFound();
        }
        res.json(pet);
      });    
  });

  router.post('/pets', celebrate(petSchema), (req, res) => {
    models.pets.create(req.body)
      .then(newPet => res.status(201).json(newPet))
      .catch(err => res.boom.badImplementation(err));
  });

};
