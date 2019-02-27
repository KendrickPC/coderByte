// ES6 arrow functions

// Arrow functions are a new way to write functions in JavaScript.
// Let's dive right into the syntax: 

var arr = [1, 2, 4, 8];

// traditional way
var squares = arr.map(function(x) {
  return x * x;
});

// es6 syntax
var squares = arr.map(x => x * x);

// filter only positive values
var arr = [-4, 2, 3, -12, 7];
var pos = arr.filter(x => x > 0); 
console.log(pos); // => [2, 3, 7]

// stand-alone arrow function
var eq = x => (x * x) + (2 * x);
console.log(eq(4)); // => 24

// function to return random number between 0 and 1
// need empty parenthesis if no arguments are given
var rand = () => Math.random();
console.log(rand());


// If you want to call multiple functions from within a function body,
// you need to include curly brackets. Below is an example where after
// a DOM element is clicked, two functions will fire.

var nav = document.getElementById('nav');

// traditional way
nav.addEventListener('click', function(e) {
  foo();
  bar();
});

// es6 syntax
nav.addEventListener('click', e => {
  foo();
  bar();
});


// Arrow functions and this

// In the traditional way of calling a function within another function,
// sometimes a clever trick was required in order to keep a reference to
// this. For example, see the code below:

var obj = {
  arr: [],
  foo: function(stuff) {
    var self = this;
    stuff.map(function(x) {
      // "this.arr" will not work here because this anonymous function
      // was not invoked by any particular object
      self.arr.push(x * x);
    });
  }
};

obj.foo([1, 2, 3]);
console.log(obj.arr); // => [1, 4, 9]

// Now there is an easier way to get around this issue without resolving
// to store this in a tempoary variable. This works because the arrow
// function lexically binds the this value to the enclosing context.

var obj = {
  arr: [],
  foo: function(stuff) {
    stuff.map(x => this.arr.push(x * x));
  }
};

obj.foo([1, 2, 3]);
console.log(obj.arr); // => [1, 4, 9]


// Resources

// Developer Mozilla
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

// Exploring ES6 book
// http://exploringjs.com/es6/ch_arrow-functions.html

// ES6 In Depth: Arrow functions
// https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/
