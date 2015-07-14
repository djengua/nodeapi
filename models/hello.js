var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var helloSchema = new Schema({
  name: String,
  msg: String
});

module.exports = mongoose.model('Hello', helloSchema);
