### twitter-api-io-example

a node/io server that collects twitter streams

created for playing around with iojs and the twitter api!

### twitter-api-io-example

a node/io server that collects twitter streams

created for playing around with iojs and the twitter api!

a work in progress!

### es6 features

#### generators

generators are used to make async code cleaner. 

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


