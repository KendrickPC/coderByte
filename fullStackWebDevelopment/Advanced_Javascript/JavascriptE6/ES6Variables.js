// ES6 variables: let and const

// Variables in JavaScript are declared using the var keyword. But in the new
// JavaScript ES6 standard, there are now two new ways of declaring variables,
// let and const.

// let
// var vs let

// The let variable declaration works similarly to var, except var is
// function-scoped in JavaScript, while let is block-scoped. Below is
// an example of functional scoping in JavaScript:

(function foo() {
  var a = 10;
  if (true) {
    var a = 20;
    var b = 30;
  }
  console.log(a); // => 20
  console.log(b); // => 30
})();

(function foo() {
  var a = 10;
  if (true) {
    // these variables are only available within this block now
    let a = 20;
    let b = 30;
  }
  console.log(a); // => 10
  console.log(b); // => ReferenceError: b is not defined
})();

// ----------------------------------------------------------------------------

// let + for loops
// var vs let


// A common issue with var declarations and for loops is that a single binding is
// created for a variable declared in the loop head so usually unexpected results
// are returned. For example, the code below doesn't output what would be
// expected.

var arr = [];
for (var i = 0; i < 3; i++) {
  arr.push(function() {
    console.log(i);
  });
}

arr[0](); // => 3
arr[1](); // => 3
arr[2](); // => 3

// At the end of the for loop, each function references the same variable, which
// is why the value of 3 is returned for each function. With the new let variable
// declaration in ES6, this problem can now be solved the following way:

var arr = [];
for (let i = 0; i < 3; i++) {
  arr.push(function() {
    console.log(i);
  });
}

arr[0](); // => 0
arr[1](); // => 1
arr[2](); // => 2

// ----------------------------------------------------------------------------

// const

// The new const declaration is also block-scoped, except the difference
// between it and let is that const

// 1. must be immediately initialized with a value
// 2. a different value cannot be assigned to it later
// on (the variable is immutable)

// Here is how you can use const for example:

(function() {
  if (true) {
    const name = 'Daniel';
    console.log(name); // => Daniel
  }
  console.log(name); // => ReferenceError: name is not defined
})();

// The following code will produce errors though:
const name; // => SyntaxError: Missing initializer in const declaration

const name = 'Daniel';
name = 'John'; // => TypeError: Assignment to constant variable

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------

// Variables and Scoping
// http://exploringjs.com/es6/ch_variables.html

// ----------------------------------------------------------------------------