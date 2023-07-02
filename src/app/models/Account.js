var mongoose = require('mongoose');
var schemaAccount = new mongoose.Schema({
  Account: {
    type: String,
    require: true,
  },
  Password: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model('Account', schemaAccount);
