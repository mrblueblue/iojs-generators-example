'use strict'

const thunkify = require('./thunkify');
const config = require('../config');

const geocoder = require('node-geocoder')('google', 'https', {
  apiKey: process.env.GOOGLE_GEOCODE_API_KEY || config.GOOGLE_GEOCODE_API_KEY
});

module.exports.geocode = thunkify(geocoder.geocode.bind(geocoder));