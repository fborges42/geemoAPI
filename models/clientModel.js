var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  User = require('./userModel');

var clientModel = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  photos_auth: Boolean,
  training_place: String,
  subscriptions: Array,
  state: Boolean
});

module.exports = mongoose.model('Client', clientModel);
