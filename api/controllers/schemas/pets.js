const joi = require('joi');

const petSchema = {
    body: joi.object().keys({
        name: joi.string().required(),
        type: joi.string().valid('dog', 'cat').required(),
        size: joi.string().valid('mini', 'medium', 'large', 'huge').required(),
        color: joi.string().optional()
    })
};

module.exports = petSchema;