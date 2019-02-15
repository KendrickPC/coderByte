function LongestWord(sen) { 

  // code goes here  
  var arr = sen.match(/[a-z0-9]+/gi);
  // return sen; 

  var sorted = arr.sort(function(a, b){
    return b.length - a.length;
  });
  return sorted[0];
}
   
// keep this function call here 
LongestWord("Welcome Home Ken Dog! Happy 2019!")
