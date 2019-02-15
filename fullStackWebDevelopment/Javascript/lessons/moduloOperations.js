// Convert hours to minutes.
// 63 = 1 hour and 3 minutes.

var time = 123;
var hours = Math.floor(time / 60);
var minutes = time % 60;
hours + " hour(s)" + ": " + minutes + " minute(s)";

// -------------------------------------------------------------------------
// Determine whether a number is odd or even.
function isEven(num) {
  if (num % 2 > 0) {
    return 'false';
  } else {
    return 'true';
  }
}

// -------------------------------------------------------------------------
