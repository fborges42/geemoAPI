var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var userModel = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  address: Array,
  contact: Array,
  state: Boolean,
  register_date: Date,
  last_visit_date: Date
});

module.exports = mongoose.model('User', userModel);
