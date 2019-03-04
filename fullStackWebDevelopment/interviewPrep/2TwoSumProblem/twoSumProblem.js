// Two Sum Problem

// Naive solution

// A naive approach to this problem would be to loop through each number and
// then loop again through the array looking for a pair that sums to S. The
// running time for the below solution would be O(n2) because in the worst
// case we are looping through the array twice to find a pair.

// Our two sum function which will return
// all pairs in the array that sum up to S
function twoSum(arr, S) {

  var sums = [];

  // check each element in array
  for (var i = 0; i < arr.length; i++) { 
    // check each other element in the array
    for (var j = i + 1; j < arr.length; j++) {
      // determine if these two elements sum to S
      if (arr[i] + arr[j] === S) {
        sums.push([arr[i], arr[j]]);
      }
    }
  }
  // return all pairs of integers that sum to S
  return sums;
}

twoSum([3, 5, 2, -4, 8, 11], 7);


// Faster solution

We can write a faster algorithm that will find pairs that sum to S in linear time. The algorithm below makes use of hash tables which have a constant lookup time. As we pass through each element in the array, we check to see if S minus the current element exists in the hash table. We only need to loop through the array once, resulting in a running time of O(n) since each lookup and insertion in a hash table is O(1).