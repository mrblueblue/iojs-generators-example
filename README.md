### twitter-api-io-example

#### Overview

A node/io server that makes use of the Twitter API.

Currently, it grabs the most recent tweets from San Francisco.

I created this play around with: 
*io.js
*ES6 Generators
*Twitter API

This is work in progress!

#### Getting Started

Register an 

Once you've set up everything for the Twitter API, you can start running the server!

```javascript
npm install
nvm use
nodemon index.js
```

Now, you can make GET requests to `localhost:3000/sf` to see the most recent tweets from SF

#### ES6 Generators

Generators are used to make async code cleaner. You can find more about them [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)

```javascript
// pattern with generators 
// (synchronous, very logic and much clean, wow)

app.get('/iojs', (req, res) => {
  run(function*(){
    try {
      let tweets = yield twitter.search({q:'iojs'})
      res.send(tweets);
    } catch(e) {
      res.sendStatus(404);
    }
  })
});

// pattern with callbacks 
// (much nested, very mess, concern)

app.get('iojs', function(req, res){
  twitter.search({q:'iojs'}, function(error, tweets){
  	if (error) {
  	  res.sendStatus(404);
  	}
    res.send(tweets);
  })
})
```


