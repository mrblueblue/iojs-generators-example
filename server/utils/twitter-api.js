'use strict'

const Twitter = require('twitter');
const thunkify = require('./thunkify');
const config = require('../config');

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY || config.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET || config.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY || config.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET || config.TWITTER_ACCESS_TOKEN_SECRET
});

module.exports.get = thunkify(client.get.bind(client));
module.exports.search = thunkify(client.get.bind(client, 'search/tweets'));
