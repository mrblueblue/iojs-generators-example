'use strict'

const app = require('express')();
const moment = require('moment');
const twitter = require('./utils/twitter-api');
const google = require('./utils/google-api');
const run = require('./utils/run');

app.get('/api/tweets', (req, res) => {

  run(function*(){

    try {

      let location = yield google.geocode(req.query.location.substring(0,50));
      let latitude = location[0].latitude;
      let longitude = location[0].longitude;

      let tweets = yield twitter.search({
        geocode: `${latitude},${longitude},10mi`,
        count: 50,
        lang: 'en',
        result_type: 'recent'  
      });

      let text = tweets.statuses.map((tweet) => {
        return {
          user: tweet.user.screen_name,
          timestamp: moment(tweet.created_at).fromNow(),
          body: !tweet.retweeted_status ? tweet.text : tweet.retweeted_status.text, 
          retweets: tweet.retweet_count
        };
      });

      console.log(text);
      res.send(text);

    } catch (e) {

      console.log(e);
      res.sendStatus(404)
    }
  });
});

const server = app.listen(process.env.PORT || 3000, function () {
  let host = server.address().address;
  let port = server.address().port;
  console.log('iojs server listening at http://%s:%s', host, port);
  console.log('send a GET request to /api/tweets?location= to get the most recent tweets from that location');
});


