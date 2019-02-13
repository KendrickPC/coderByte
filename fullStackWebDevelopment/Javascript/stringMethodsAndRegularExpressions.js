// Javascript String Methods
  // https://www.w3schools.com/js/js_string_methods.asp

var str = "Hello";

str.charAt(0); 
// H
str.charAt(3); 
// l
str.charAt(7); 
// ""

// -------------------------------------------------------------------------
var str = "Hello world";

str.charCodeAt(0); // 72  because H = 72
str.charCodeAt(6); // 119 because w = 119

// you can now easily change the first character to the next one in the
// alphabet using a combination of both functions
String.fromCharCode( str.charCodeAt(0) + 1 ); 
// I

// -------------------------------------------------------------------------

var str = "mike tyson's punch out!"

str.charAt(0).toUpperCase(); 
// M

// -------------------------------------------------------------------------
var str = "Mike Tyson's Punch Out!";

var arr1 = str.split("");

// -------------------------------------------------------------------------
var str = "Mike Tyson's Punch Out is my favorite video game.";
var str2 = str.replace("favorite", "most hated");
str2

// -------------------------------------------------------------------------
 var str = "I play NBA 2K19 on the Nintendo Switch."
 var part = str.substr(-16, 10)
 part
 // Nintendo

// -------------------------------------------------------------------------
// Capitalize Letters

function LetterCapitalize(str) { 
  
  // split the string into an array
  var words = str.split(" ");

  // we split the word into two parts and then combine the parts 
  // the first part is the first letter which we capitalize and the 
  // second part is the rest of the string
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].substring(0,1).toUpperCase() + words[i].substring(1);
  }

  // return the array of words joined into a string
  return words.join(" ");
         
}
   
LetterCapitalize("hello world from coderbyte");                                                                          

// -------------------------------------------------------------------------
// Capitalize Letters 2

function LetterCapitalize(str) { 
  
  // our regex [a-z] matches every alphabetic character in the string
  // but the \b before it specifies a word boundary, in other words, nothing can 
  // come before those letters therefore selecting every word in the string
  return str.replace(/\b[a-z]/gi, function(char) { 
    return char.toUpperCase();
  });
         
}
   
LetterCapitalize("hello world from coderbyte");   

// -------------------------------------------------------------------------
// Letter Changes
function LetterChanges(str) { 

  // we will replace every letter in the string with the letter following it
  // by first getting the charCode number of the letter, adding 1 to it, then 
  // converting this new charCode number to a letter using the fromCharCode function
  // we also check to see if the character is z and if so we simply convert the z to an a
  var converted = str.replace(/[a-z]/gi, function(char) { 
    return (char === 'z' || char === 'Z') ? 'a' : String.fromCharCode(char.charCodeAt() + 1);
  });

  // we have now successfully converted each letter to the letter following it
  // in the alphabet, and all we need to do now is capitalize the vowels
  var capitalized = converted.replace(/a|e|i|o|u/gi, function(vowel) { 
    return vowel.toUpperCase();
  });

  // return the final string
  return capitalized;
         
}
   
LetterChanges("fun times!");

// -------------------------------------------------------------------------
// -------------------------------------------------------------------------
// -------------------------------------------------------------------------