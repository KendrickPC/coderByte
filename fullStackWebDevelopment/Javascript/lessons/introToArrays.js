var arr = [10, 'hello', true, [1, 2, 3]];

// for (var i = 0; i <= arr.length; i++) {
//   arr[i]
// }

arr[3][0]
// [1, 2, 3]

// arr.shift removes the first element of the array.

// -------------------------------------------------------------------------
var str = "Happy Valentines Day Jenny Wu.";
var arr = str.split(' ');
var rev = arr.reverse().join(' ');
rev

// -------------------------------------------------------------------------
var arr = [1, 2, 3, 100];
arr.indexOf(3)

// -------------------------------------------------------------------------
// Vowel count (count the number of vowels in a string.) 
var str = "hello ken dog, happy valentines day.";
var arr = str.split('');
var vowels = ['a', 'e', 'i', 'o', 'u'];
count = 0;

for (var i = 0; i < arr.length; i++) {
  if (vowels.indexOf(arr[i]) !== -1) {
    count += 1;
  }
}

count
// 10
// -------------------------------------------------------------------------
// -------------------------------------------------------------------------
