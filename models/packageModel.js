var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var packageModel = new Schema({
  state: Boolean,
  description: String
});

module.exports = mongoose.model('Package', packageModel);
