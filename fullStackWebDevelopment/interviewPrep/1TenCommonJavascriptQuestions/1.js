// How would you check is a number is an integer?

// Create a function and divide use a modulo.
// A very simply way to check if a number is a decimal or integer
// is to see if there is a remainder left when you divide by 1.

function isInteger(arbitraryNumber) {
  return arbitraryNumber % 1 === 0;
}

console.log(isInteger(100));
console.log(isInteger(0.50));


