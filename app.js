const express = require('express');
const db = require('./db');

const citiesService = require('./services/cities');

const app = express();

const mongoose = db.connect();

app.use('/api/cities', citiesService);

app.get('/', (req, res) => {
  res.send('It works!');
});

module.exports = app;
