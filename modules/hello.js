var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var helloSchema = new Schema({
  name: String,
  message: String
});

module.exports = moongose.model('Hello', helloSchema);
