// Write a function that would allow you to do the following:

// multiply(5)(6);

function multiply(a, b) {
  return a * b;  
};

// multiply(5)(6);


// You can create a closure to keep the value of 'a' even after the inner function
// is returned. The inner function that is being returned is created within an
// outer function, making it a closure, and it has access to the variables
// within the outer function, in this case the variable a.

function multiply(a) {
  return function(b) {
    return a * b;
  }
}

multiply(5)(6);