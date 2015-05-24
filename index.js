'use strict'

const app = require('express')();

const twitter = require('./utils/twitter-api')
const run = require('./utils/run');

app.get('/', (req, res) => {
  res.send('i am a iojs server using the twitter api');
});

app.get('/iojs', (req, res) => {
  run(function*(){
    try {
      let tweets = yield twitter.search({q:'iojs'})
      res.send(tweets);
    } catch(e) {
      res.sendStatus(404);
    }
  })

})

const server = app.listen(3000, function () {
  let host = server.address().address;
  let port = server.address().port;
  console.log('iojs server listening at http://%s:%s', host, port);
});


