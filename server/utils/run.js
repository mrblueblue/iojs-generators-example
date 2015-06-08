'use strict'

const run = function(generator) {
  //initialize the generator
  let gen = generator();

  // call next to assign the return value to 'yield'
  next();

  function next(error, value){
    if (error) return gen.throw(error);

    // call next on the generator
      // one first execution, value will be null
      // on second, execution, value will be the
      // return value of the callback
    let continuable = gen.next(value);

    // once the generator is done, break out
    if (continuable.done) return;

    // on first pass,
    // the async callback is the value of the gen.next()
    let callback = continuable.value;

    // execute the callback and apply the next function
    // to the params (error, value) where value is the
    // returned value of the async callback (like data)
    callback(next);

      // when next executes again, the magic happens in this block
        // 'let continuable = gen.next(value);'
      // that is to say, yield is assigned the return value of the callback!
  }
}

module.exports = run;
