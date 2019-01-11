const { celebrate } = require('celebrate');
const { ownerSchema } = require('./schemas/owners');

module.exports = (router, models) => {
  router.get('/owners', async (req, res) => {
    res.json({
      owners: await models.owners.find(),
    });
  });

  router.post('/owners', celebrate(ownerSchema), (req, res) => {
    models.owners.create(req.body)
      .then(newOwner => res.status(201).json(newOwner))
      .catch(err => res.boom.badImplementation(err));
  });
};
