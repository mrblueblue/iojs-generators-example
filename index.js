'use strict'

const app = require('express')();
const twitter = require('./utils/twitter-api');
const google = require('./utils/google-api');
const run = require('./utils/run');

app.get('/tweets', (req, res) => {

  if (!req.query.location) {
    res.send('please provide a location');
  }

  run(function*(){

    let location = yield google.geocode(req.query.location);
    let latitude = location[0].latitude;
    let longitude = location[0].longitude;

    let params = {
      geocode: `${latitude},${longitude},10mi`,
      count: 50,
      lang: 'en',
      result_type: 'recent'  
    }

    let tweets = yield twitter.search(params)
    let text = tweets.statuses.map((tweet) => {
      if (!tweet.retweeted_status) return tweet.text
      else return tweet.retweeted_status.text
    });

    console.log(text);
    res.send(text);
  });
});

const server = app.listen(3000, function () {
  let host = server.address().address;
  let port = server.address().port;
  console.log('iojs server listening at http://%s:%s', host, port);
  console.log('send a GET request to localhost:3000/sf to get the most recent tweets from SF');
});


