var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var paymentTypeModel = new Schema({
  state: Boolean,
  description: String
});

module.exports = mongoose.model('PaymentType', paymentTypeModel);
