var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var contactTypeModel = new Schema({
  description: String,
  state: Boolean
});

module.exports = mongoose.model('ContactType', contactTypeModel);
