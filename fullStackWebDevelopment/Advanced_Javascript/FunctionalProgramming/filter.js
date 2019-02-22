// Example 1:
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]


// Example 2:
var nums = [-4, 3, 2, -21, 1];

var pos = nums.filter(function(el) {
  return el > 0;
});

console.log(pos); // => [3, 2, 1]


// Example 3:
var data = [
  {name: 'daniel', age: 45},
  {name: 'john', age: 34},
  {name: 'robert', age: null},
  {name: 'jen', age: undefined},
  {name: null, age: undefined}
];

// dataMod will now contain only the first two objects in the data array
var dataMod = data.filter(function(el) {
  if (el.name != undefined && el.age != undefined) {  
    return true;
  }
  else { 
    return false; 
  }
});

console.log(dataMod);
