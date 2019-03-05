function powerSet(arr) {
  // The final power set.
  var powers = [];
  // The total number of sets that the power set will contain.
  var total = Math.pow(2, arr.length);

  // Looping through each value from 0 to 2^n.
  for (var i = 0; i < total; i++) {
    // A set added to the power set.
    var temporarySet = [];
    // Converting the integer to binary code.
    var num = i.toString(2);
    // Pad the binary number so 1 becomes 001.
    while (num.length < arr.length) { num = '0' + num; }
    // Build the set that matches the 1's in the binary number.
    for (var b = 0; b < num.length; b++) {
      if (num[b] === '1') { temporarySet.push(arr[b]); }
    }
    // Add this set to the final power set.
    powers.push(temporarySet);
  }
  return powers;
}

// powerSet(['Jim', 'John', 'Joe']);
powerSet([1, 2, 3]);
