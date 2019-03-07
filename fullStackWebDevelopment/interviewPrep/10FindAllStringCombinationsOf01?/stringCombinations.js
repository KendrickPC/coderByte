function patterns(str, all) {
  // If the  string is empty, return all string sets.
  if (str.length === 0) {
      return all;
  }
  // If character is 0 or 1, add the character to each
  // string set we currently have (so far).
  if (str[0] === '0' || str[0] === '1') {
    for (var i = 0; i < all.length; i++) {
      all[i].push(str[0]);
    }     
  }
  // For the wildcard, we make a copy of each string set.
  // For half of them, we append a 0 to the string and 
  // for the other half we append a 1 to the string.
  if (str[0] === '?') {
    var len = all.length;
    for (var i = 0; i < len; i++) {
      var temporary = all[i].slice(0);
      all.push(temporary);
    }
    for (var i = 0; i < all.length; i++) {
      (i < all.length/2) ? all[i].push('0') : all[i].push('1');
    }
  }
  // Recursively calculate all string sets.
  return patterns(str.substring(1), all);
}

patterns('10?1?', [[]]);
