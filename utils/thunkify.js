
// turns a regular node function into one which returns 
// a thunk, useful for generator-based flow control 
'use strict'

const thunkify = function(func){
 
  // thunkify returns a function
  return function(){
    let args = Array.prototype.slice.call(arguments)

    // which returns another
    // function that accepts a callback
    return function(callback){
      // console.log(callback)
      args.push(callback);

      // and evaluates the passed in function
      // with all the arguments of the outer 
      // in addition to the inner callback param
      func.apply(this, args);
    }
  }
}

module.exports = thunkify;
