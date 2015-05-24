'use strict'

const Twitter = require('twitter');
const config = require('../config');
const thunkify = require('./thunkify');

const client = new Twitter({
  consumer_key: config.TWITTER_CONSUMER_KEY,
  consumer_secret: config.TWITTER_CONSUMER_SECRET,
  access_token_key: config.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: config.TWITTER_ACCESS_TOKEN_SECRET
});

module.exports.get = thunkify(client.get.bind(client));
module.exports.search = thunkify(client.get.bind(client, 'search/tweets'));
