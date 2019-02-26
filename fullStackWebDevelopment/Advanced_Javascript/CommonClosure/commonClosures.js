// Question 1:
// What will the following code output?

for (var i = 0; i < 3; i++) {
  setTimeout(function() { alert(i); }, 1000 + i);
}

// ----------------------------------------------------------------------------

// Question 2:
// Write a function that would allow you to do this.

var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27


function createBase(base) {
    return function(add) {
        return base + add;
    }
}

var addSix = createBase(6);
alert(addSix(10));
alert(addSix(21));

// ----------------------------------------------------------------------------

// Question 3:
// How would you use a closure to create a private counter?

// You can create a function within an outer function (a closure) that
// allows you to update a private variable but the variable wouldnt be
// accessible from outside the function without the use of a helper function.

function counter() {
  var _counter = 0;
  // return an object with several functions that allow you
  // to modify the private _counter variable
  return {
    add: function(increment) { _counter += increment; },
    retrieve: function() { return 'The counter is currently at: ' + _counter; }
  }
}

// error if we try to access the private variable like below
// _counter;

// usage of our counter function
var c = counter();
c.add(5); 
c.add(9); 

// now we can access the private variable in the following way
c.retrieve(); // => The counter is currently at: 14

