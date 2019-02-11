// [1, 2, 3, 4]
// [1, 4, 9, 16]

function doubling(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(arr[i] * arr[i]);
  }
  return result;
}

doubling([1, 2, 3, 4])