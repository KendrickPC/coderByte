// The reduce function applies a specific function to all the elements in an
// array and reduces it to a single value. The reduce function has actually
// been used in several of the challenge solutions, one example being Mean
// Mode. We can use the reduce function to add up all the numbers in an array
// for example. The four arguments the reduce function takes are:

// 1. previous value
// 2. current value
// 3. current index
// 4. original array

// Example 1:
var nums = [1, 2, 3, 4];

var sum = nums.reduce(function(prevVal, curVal, curIndex, origArr) {
  return prevVal + curVal;
});

console.log(sum); // => 10


// Example 2:
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15



