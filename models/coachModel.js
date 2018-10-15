var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var coachModel = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  state: Boolean
});

module.exports = mongoose.model('Coach', coachModel);
