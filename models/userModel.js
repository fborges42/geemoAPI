var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var userModel = new Schema({
  name: String,
  username: String,
  email: String,
  password: String,
  address: Array,
  contact: Array,
  state: Boolean,
  registerDate: Date,
  lastVisitDate: Date
});

module.exports = mongoose.model('User', userModel);
