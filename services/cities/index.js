const express = require('express');

const countryCodeRouter = require('./routes/country-codes');

const service = express();

service.use('/country-codes', countryCodeRouter);

module.exports = service;
