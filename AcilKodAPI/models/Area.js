const mongoose = require('mongoose');
const Loc = require('./Loc');
const Schema = mongoose.Schema;

const AreaSchema = new Schema({
  AreaKod: {
    type: String,
    required: true,
    unique: true
  },
  AreaText: {
    type: String,
    required: true,
  },
  AreaDesc: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  createdBy: {
    type: String,
    required: true
  },
  createdLocation:Loc.LocationSchema

});

module.exports = mongoose.model('Area', AreaSchema);