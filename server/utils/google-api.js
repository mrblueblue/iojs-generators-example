'use strict'

const thunkify = require('./thunkify');

const geocoder = require('node-geocoder')('google', 'https', {
  apiKey: process.env.GOOGLE_GEOCODE_API_KEY
});

module.exports.geocode = thunkify(geocoder.geocode.bind(geocoder));