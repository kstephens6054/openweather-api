const mongoose = require('mongoose');

const CountryCodeSchema = new mongoose.Schema({
  code: {
    type: String,
    minLength: 2,
    maxLength: 2,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('CountryCode', CountryCodeSchema);
