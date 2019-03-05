function ArrayAdditionI(arr) {
  // Get the largest number and remove it from my array.
  var sum = Math.max.apply(null, arr);
  arr.splice(arr.indexOf(sum), 1);

  // Power Set
  var sets = [[]];

  // Generate the power set for each new set.
  // Check if the temporary sum equals my sum above.
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0, len = sets.length; j < len; j++) {
      var temporary = sets[j].concat(arr[i]);
      sets.push(temporary);
      var s = temporary.reduce(function(p, c) { return p + c; });
      if (s === sum) { return "true"; }
    }
  }
  return "false";
}

ArrayAdditionI(readline());

// This algorithm runs in O(2n) time because in the worse case, I need
// to create every possible subset of the array to check if any of them
// equal the goal sum, and there are 2n possible sets.
