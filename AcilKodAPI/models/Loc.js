const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LocationSchema = new Schema({
  Latitude: {
    type: Number,
    required: true,
  },
  Longitude: {
    type: Number,
    required: true,
  },
  Z: {
    type: Number,
    required: false,
    default:0
  }
});

module.exports = mongoose.model('Loc', LocationSchema);
module.exports.LocationSchema = LocationSchema
