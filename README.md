#### Overview

An io.js server that makes use of ES6 Generators and the Twitter and Google Geocode APIs. Query the server for a location and it will return the most recent tweets for that location. I created this to play around with: 
- io.js
- ES6 Generators
- Twitter API
- Google Maps API

#### Using the API

To use the API, make a `GET` request to `iojs-twitter.herokuapp.com/api/tweets?location=query`, where `query` is equal to the location for which you want to see the most recent tweets. For example, in `curl` you would do (though the output would be ugly):

    curl http://iojs-twitter.herokuapp.com/api/tweets?location=oakland

#### Running Locally

[Register](https://apps.twitter.com/) an Twitter application. 

Then, use the auth information of your Twitter application to create a `config.js` file in the root directory. This will allow the proper configuration to access the Twitter API.

Once you've set up the `config.js` file, you can start running the server!

```javascript
npm install
nvm use
nodemon index.js
```

Now, you can make GET requests to `localhost:3000/api/tweets?locations=` to see the most recent tweets for any location.

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


