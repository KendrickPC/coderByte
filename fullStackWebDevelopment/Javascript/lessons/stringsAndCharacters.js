// var str = "hello world";
// var str2 = "hello Mars from Taipei $200.00 TWD"

// "I am a sentence.".length

// var replaceString = str.replace("hello", "goodbye")
// replaceString

// str === str2

function letterCapitalize(str) {
  var words = str.split(" ");
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].substr(0, 1).toUpperCase() + words[i].substr(1);
  }
  return words.join(" ");
}

str = "i ran there."

letterCapitalize(str)