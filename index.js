'use strict'

const app = require('express')();

const twitter = require('./utils/twitter-api');
const google = require('./utils/google-api');
const run = require('./utils/run');
const request = require('request');

app.get('/', (req, res) => {
  res.send('i am a iojs server using the twitter api');
});

// First iteration of the API endpoint
app.get('/sf', (req, res) => {
  run(function*(){
    try {

      let params = {
        geocode: '37.781157,-122.398720,4mi', // San Francisco
        count: 50,
        lang: 'en',
        result_type: 'recent'  
      };

      let tweets = yield twitter.search(params)
      let text = tweets.statuses.map((tweet)=>{
        if (!tweet.retweeted_status) return tweet.text
        else return tweet.retweeted_status.text
      });

      console.log(text);
      res.send(text);

    } catch(e) {
      res.sendStatus(404);
    }
  })
});

// Google Geocode API
app.get('/google', (req, res) => {
  run(function*(){
    try {
      let location = yield google.geocode('san francisco');
      let latitude = location[0].latitude;
      let longitude = location[0].longitude;
      console.log(latitude, longitude);
      res.send(location);
    } catch(e) {
      res.sendStatus(404);
    }
  });
});

const server = app.listen(3000, function () {
  let host = server.address().address;
  let port = server.address().port;
  console.log('iojs server listening at http://%s:%s', host, port);
  console.log('send a GET request to localhost:3000/sf to get the most recent tweets from SF');
});


