const fs = require('fs').promise;

const CountryCode = require('./models/CountryCode');

const COUNTRY_NAMES_FILE = 'country.names.json';
const CITY_LIST_FILE = 'current.city.list.json';

const installCountryCodes = () => {

};

const clearCountryCodes = () => {

};

module.exports = {
  clearCountryCodes,
  installCountryCodes
};
