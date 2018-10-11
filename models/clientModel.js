var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var clientModel = new Schema({
    user_id: Number,
    active: Boolean,
    training_place: String,
    photos_auth: Boolean,
    survery_id: Number,
});

module.exports = mongoose.model('Client', clientModel);