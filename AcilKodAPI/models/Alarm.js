const mongoose = require('mongoose');
const Loc  = require('./Loc');
const Schema = mongoose.Schema;

const AlarmSchema = new Schema({
  AlarmKod: {
    type: String,
    required: true,
    unique: true
  },
  AlarmRenk: {
    type: String,
    required: true,
    unique: true
  },
  AlarmText: {
    type: String,
    required: true,
  },
  AlarmSound: {
    type: String,
    required: false,
  },
  AlarmIcon: {
    type: String,
    required: false
  },
  AlarmStatus: {
    type: Boolean,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  createdBy: {
    type: String,
    required: true
  },
  createdLocationRoom: {
    type: String,
    required: true
  },
  createdLocation: Loc.LocationSchema
});

module.exports = mongoose.model('Alarm', AlarmSchema);