// How would you create a private variable in JavaScript?

// To create a private variable in JavaScript that cannot be changed you need
// to create it as a local variable within a function. Even if the function
// is executed the variable cannot be accessed outside of the function.
// For example:

function func() {
  var priv = "secret code";
}

console.log(priv); // throws error

// To access the variable, a helper function would need to be created that
// returns the private variable.

function func() {
  var priv = "secret code";
  return function() {
    return priv;
  }
}

var getPriv = func();
console.log(getPriv()); // => secret code