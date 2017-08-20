var mongoose = require('mongoose');
var ColorSchema = new mongoose.Schema({
  "team": String,
  "primary-hex": String,
  "primary-rgb": String,
  "secondary-hex": String,
  "secondary-rgb": String,
  "tertiary-hex": String,
  "tertiary-rgb": String,
  "quarternary-hex": String,
  "quarternary-rgb": String
});

module.exports = mongoose.model('ColorSchema', ColorSchema);
