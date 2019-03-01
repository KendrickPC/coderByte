// Explain what a callback function is and provide a simple example.

// A callback function is a function that is passed to another function as an argument
// and is executed after some operation has been completed. Below is an example of a
// simple callback function that logs to the console after some operations
// have been completed.

function modifyArray(arr, callback) {
  // do something to arr here
  arr.push(100);
  // then execute the callback function that was passed
  callback();
}

var arr = [1, 2, 3, 4, 5];

modifyArray(arr, function() {
  console.log("array has been modified", arr);
});

// --------------------------------------------------------------------------------------

// Another couple examples of Callback functions.

// Callbacks are a way to make sure certain code doesn’t execute
// until other code has already finished execution.

function first(){
  console.log(1);
}
function second(){
  console.log(2);
}
first(); // 1
second(); // 2


function first(){
  // Simulate a code delay
  setTimeout( function(){
    console.log(1);
  }, 500 );
}
function second(){
  console.log(2);
}
first(); //2
second(); //1
