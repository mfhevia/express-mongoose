const { Schema, model } = require('mongoose');
const timestamp = require('mongoose-timestamp');

const petSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['dog', 'cat']
    },
    size: {
        type: String,
        required: true,
        enum: ['mini', 'medium', 'large', 'huge']
    },
    color: {
        type: String,
        required: false
    }
  });

petSchema.plugin(timestamp);

const petModel = model('Pet', petSchema);

petSchema.statics.create = pet => {
    const petInstance = new petModel(pet);
    return petInstance.save;
};

module.exports = petModel;