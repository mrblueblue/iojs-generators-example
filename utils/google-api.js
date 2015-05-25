'use strict'

const config = require('../config');
const thunkify = require('./thunkify');

const geocoder = require('node-geocoder')('google', 'http', {
  apiKey: config.GOOGLE__GEOCODE_API_KEY
});

module.exports.geocode = thunkify(geocoder.geocode.bind(geocoder));