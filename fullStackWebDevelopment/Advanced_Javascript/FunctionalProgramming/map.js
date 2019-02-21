// The map function creates a new array by calling a specific function on each
// element in an initial array. For example, if you have an array of strings in
// the form "MM-DD" that represent birthdays and you want to convert each
// element to be in a different format, you could use the map function to create
// a new array with new elements. 

// Example 1:
var bdays = ['08-14', '10-04', '04-21']; 

// we want a new array where the birthdays will be in the format: MM/DD
// the elem parameter will be each element from the original array 
var bdays2 = bdays.map(function(elem) { 
  return elem.replace('-', '/');
});

console.log(bdays2); // => ['08/14', '10/04', '04/21']



// Example 2: 
var arr = [1.5, 2.56, 5.1, 12.33];

// round each number up in an array
var rounded = arr.map(Math.ceil);

console.log(rounded); // => [2, 3, 6, 13]
