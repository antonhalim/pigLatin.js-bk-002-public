'use strict';

var pigLatin = function(english){
  if("aiueo".includes(english[0])) return (english + "ay");
  var result = [],
      array = english.split(" ");
  for(var i = 0; i < array.length;i++){

  var vowel = array[i].match(/a|i|u|e|o/g),
      wordArray = array[i].split("");

    if(vowel[0] ==="u" && wordArray[wordArray.indexOf(vowel[0])-1] === "q"){
        var splitWord = array[i].split("u");
        result.push(splitWord[1] + splitWord[0] + "uay");
    }
    else{
      var splitWord = wordArray.splice(0, wordArray.indexOf(vowel[0])),
        newWord = wordArray + splitWord + "ay";
      result.push(newWord.replace(new RegExp(",", "g"), ""));
    }
  }
  return result.join(" ");
};
