const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    default: uretRastgeleKod()
  },
  photo: {
    type: String,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
function uretRastgeleKod() {
  var karakterSeti = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var kod = '';
  for (var i = 0; i < 8; i++) {
    var rastgeleIndex = Math.floor(Math.random() * karakterSeti.length);
    kod += karakterSeti.charAt(rastgeleIndex);
  }
  return kod;
}
module.exports = mongoose.model('User', userSchema);