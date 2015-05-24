### twitter-api-io-example

a node/io server that collects twitter streams

created for playing around with iojs and the twitter api!

a work in progress!

### es6 features

#### generators

generators are used to make async code cleaner. 

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


