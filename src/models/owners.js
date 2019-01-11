const { Schema, model } = require('mongoose');
const timestamp = require('mongoose-timestamp');

const ownerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true
  },
  phones: {
    type: [String]
  }
});

ownerSchema.plugin(timestamp);
module.exports = model('Owner', ownerSchema);