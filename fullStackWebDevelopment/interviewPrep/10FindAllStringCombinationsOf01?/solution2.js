// All string combinations of 1, 0, and ?
// Example: 11?1 => [1101], [1111]
// Example: 11?? => [1000, 1010, 1011, 1001]

var all = [];

function allCombinations(str) {
  let idx = str.indexOf('?');

  if (idx < 0) {
    all.push(str);
    return;
  }
  var splitString = str.split('');
  var addZero = splitString.slice();
  var addOne = splitString.slice();

  addZero.splice(idx, 1, '0');
  addOne.splice(idx, 1, '1');

  allCombinations(addZero.join(''));
  allCombinations(addOne.join(''));
}

allCombinations('10??');

// all;