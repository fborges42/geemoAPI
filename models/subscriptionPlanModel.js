var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var subscriptionPlanModel = new Schema({
  description: String,
  code: String,
  valid_until: Date,
  package: { type: mongoose.Schema.Types.ObjectId, ref: 'Package' },
  payment_type: { type: mongoose.Schema.Types.ObjectId, ref: 'PaymentType' },
  value: Number,
  payment_x_times: Number
});

module.exports = mongoose.model('SubscriptionPlan', subscriptionPlanModel);
