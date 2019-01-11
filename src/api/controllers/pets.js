const { celebrate } = require('celebrate');
const petSchema = require('./schemas/pets');

module.exports = (router, models) => {
  router.get('/pets', async (req, res) => {
    res.json({
      pets: await models.pets.find(),
    });
  });

  router.post('/pets', celebrate(petSchema), (req, res) => {
    models.pets.create(req.body)
      .then(newPet => res.status(201).json(newPet))
      .catch(err => res.json(err));
  });
};
