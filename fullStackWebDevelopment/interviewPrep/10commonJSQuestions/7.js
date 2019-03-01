// How would you add your own method to the Array object so the following code would work?

var arr = [1, 2, 3, 4, 5];
var avg = arr.average();
console.log(avg);  // arr.average is not a function

// JavaScript is not class based, but it is a prototype-based language. This means that each
// object is linked to another object, its prototype, and it inherits its methods. You can
// follow the prototype chain for each object up until you reach the null object which has
// no prototype. 
// We need to add a method to the global Array object, and we will do this by
// modifying the Array prototype.


Array.prototype.average = function() {
  // calculate sum
  var sum = this.reduce(
    function(previous, current) {
      return previous + current;
    });
  // return sum divided by number of elements
  return sum / this.length;
};

var arr = [1, 2, 3, 4, 5];
var avg = arr.average();
console.log(avg); // => 3

// Now every array that is created will have the average method inherited along with every other
// Array method. But, you need to be careful with modifying the prototype of an object, because
// you can mistakenly overwrite a common method.
