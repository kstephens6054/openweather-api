const db = require('./db');
const citiesInstaller = require('./services/cities/installer');

db.connect()

citiesInstaller.clearCountryCodes();
citiesInstaller.installCountryCodes();

db.disconnect();
