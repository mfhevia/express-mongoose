const { Schema, model } = require('mongoose');
const timestamp = require('mongoose-timestamp');
const autopopulate = require('mongoose-autopopulate');

const petSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ['dog', 'cat'],
  },
  size: {
    type: String,
    required: true,
    enum: ['mini', 'medium', 'large', 'huge'],
  },
  color: {
    type: String,
    required: false,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'Owner',
    autopopulate: true,
    required: false
  }
});

petSchema.plugin(timestamp);
petSchema.plugin(autopopulate);
module.exports = model('Pet', petSchema);