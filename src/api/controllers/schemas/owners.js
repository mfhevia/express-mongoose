const { Joi } = require('celebrate');
Joi.objectId = require('joi-objectid')(Joi);

const ownerSchema = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    address: Joi.string().required(),
    phones: Joi.array().items(Joi.string()).optional(),
  }),
};

const ownerIdSchema = {
  params: {
    id: Joi.objectId().required()
  }
}

module.exports = {
  ownerSchema,
  ownerIdSchema
};
