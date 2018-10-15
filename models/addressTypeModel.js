var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var addressTypeModel = new Schema({
  type: String,
  state: Boolean
});

module.exports = mongoose.model('AddressType', addressTypeModel);
