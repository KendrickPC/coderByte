var all = [];

function parens(left, right, str) {
  // If no more brackets can be added, then add the first balanced string.
  if (left === 0 && right === 0) {
    all.push(str);
  }
  // If we have a left bracket leftover, we add it.
  if (left > 0) {
    parens(left-1, right+1, str+"(");
  }
  // If we have a right bracket leftover, we add it.
  if (right > 0) {
    parens(left, right-1, str+")");
  }
}

// The parameters parens(x, y, z) specify:
// x: left brackets to start adding.
// y: right brackets we can add only after adding a left bracket.
// z: the string so far
parens(5, 0, "");
all;
