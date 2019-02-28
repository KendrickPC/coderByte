// How would you check is a number is an integer?

// Create a function and divide use a modulo.

function isInteger(arbitraryNumber) {
  return arbitraryNumber % 1 === 0;
}

console.log(isInteger(100));
console.log(isInteger(0.50));
