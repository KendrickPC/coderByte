// for (initial; terminating; steps) {

// }

// var arr = [];
// for (var i = 0; i < 10; i++) {
//   arr.push(i);
// }
// arr


// var arr = [];
// var counter = 0;
// while (counter < 10) {
//   arr.push(counter);
//   // counter = counter + 1
// }
// arr 

// var arr = [1, 2, 100, 4];
// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] === 100) {
//     continue;
//   }
//   arr[i] = arr[i] - 1;
// }
// arr


var str = "Hello World!";
var arr= str.split('')
arr;

for (var i = 0; i < str.length; i++) {
  if (arr[i] === arr[i].toUpperCase()) {
    arr[i] = arr[i].toLowerCase();
  }
}
arr.join('');
