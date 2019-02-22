# Map, reduce, and filter - JavaScript functional programming

Three functions that are commonly used when applying functional programming techniques in Javascript are the map, reduce, and filter functions. We'll go over each below and explain how they work. 

##### Functional Programming Link
[Function Programming](http://eloquentjavascript.net/1st_edition/chapter6.html)

##### Reduce
[Reduce Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15