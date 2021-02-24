const express = require('express');
const CountryCode = require('../models/CountryCode');

const router = express.Router();

const cache = {
  isValid: false,
  data: null
};

/**
 * @route GET /api/cities/country-codes
 */
router.get('/', (req, res) => {
  if (cache.isValid) {
    return res.json(cache.data);
  }

  CountryCode
    .find({}, ['code', 'name'])
    .then((data) => {
      cache.data = data;
      cache.isValid = true;
      res.json(data);
    })
    .catch((error) => {
      cache.data = null;
      cache.isValid = false;
      res.status(500).json(error);
    })
});

module.exports = router;
