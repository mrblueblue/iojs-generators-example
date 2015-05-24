'use strict'

const run = function(generator) {
	const gen = generator();
	next();

	function next(error, value){
		if (error) return generator.throw(error);
		let continuable = generator.next(value);
		if (continuable.done) return;
		let callback = continuable.value;
		callback(next);
	}
}

module.exports = run;
