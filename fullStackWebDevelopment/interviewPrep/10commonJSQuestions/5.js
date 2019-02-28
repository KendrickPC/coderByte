// What does "use strict" do?

// The "use strict" literal is entered at the top of a JavaScript program or at
// the top of a function and it helps you write safer JavaScript code by throwing
// an error if a global variable is created by mistake. For example, the
// following program will throw an error:

function useStrictTesting(value) {
  "use strict"; 
  x = value + 10;
  return x;
}

console.log(useStrictTesting(2)); // Uncaught ReferenceError: x is not defined
// x is not defined because it is a global scope variable.


// The above will throw an error because x was not defined and it is being set to some
// value in the global scope, which is not allowed with "use strict". The small
// change below fixes the error being thrown:

function useStrictTesting(value) {
  "use strict"; 
  var x = value + 10;
  return x;
}
console.log(useStrictTesting(2)); // 12
