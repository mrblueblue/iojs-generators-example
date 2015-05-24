'use strict'

const config = require('./config');

const express = require('express');
const app = express();

const Twitter = require('twitter');
const client = new Twitter({
  consumer_key: config.TWITTER_CONSUMER_KEY,
  consumer_secret: config.TWITTER_CONSUMER_SECRET,
  access_token_key: config.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: config.TWITTER_ACCESS_TOKEN_SECRET
});

app.get('/', (req, res) => {
  res.send('i am a iojs server using the twitter api');
});

app.get('/iojs', (req, res) => {
  client.get('search/tweets', {q: 'io.js'}, (error, tweets) => { 
    res.send(tweets);
  });
})

const server = app.listen(3000, function () {

  let host = server.address().address;
  let port = server.address().port;

  console.log('iojs server listening at http://%s:%s', host, port);
});


