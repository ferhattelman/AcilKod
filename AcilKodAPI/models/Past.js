const mongoose = require('mongoose');
const Loc = require('./Loc');
const Schema = mongoose.Schema;

const PastSchema = new Schema({
    AlarmKod: {
        type: String,
        required: true,
    },
    AlarmRenk: {
        type: String,
        required: true,
    },
    AlarmText: {
        type: String,
        required: true,
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

module.exports = mongoose.model('Past', PastSchema);