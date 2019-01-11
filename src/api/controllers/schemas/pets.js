const { Joi } = require('celebrate');
Joi.objectId = require('joi-objectid')(Joi);

const petSchema = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    type: Joi.string().valid('dog', 'cat').required(),
    size: Joi.string().valid('mini', 'medium', 'large', 'huge').required(),
    color: Joi.string().optional(),
    owner: Joi.objectId().optional()
  }),
};

const petIdSchema = {
  params: {
    id: Joi.objectId().required()
  }
}

module.exports = {
  petSchema,
  petIdSchema
};
