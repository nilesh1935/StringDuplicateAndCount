// Import stylesheets
import './style.css';

//Find the duplicate characters that are present in the below mentioned string. Also you have to find out the count of each duplicate characters i.e., how many times each duplicate characters are occurring in the string. Finally, your solution should have a time complexity of O(n).



//AAasdsTERUIfg%#$,gfhADcvbm89ADSasopkJFDP78kfdm^$*(gkfld()()()()


//
// Write Javascript code!

let strName = "ABABB"
// var strArry = ["a","b","c","a","b"]
// var newArray = [];
// var count = 0;
// for(var i=0; i<strArry.length;i++){
//    for(var j=i+1; j<strArry.length; j++){
//       if(strArry[i] === strArry[j]){
//          count++;
//          newArray.push(strArry[i + count])
//       }
//    }
// }
// console.log(newArray)
function getFrequency(string) {
  var freq = {};
  for (var i=0; i<string.length;i++) {
      var character = string[i];
      console.log(freq[character])
      if (freq[character]) {
         freq[character]++;
         console.log("Called from IF",freq[character],character)
      } else {
         freq[character] = 1;
         console.log("Called from Else",freq[character], character)
        
      }
  }
  
  return freq;
  };

  function getDuplicateFrequency(string) {
   var freq = {};
   var duplicate = {};
   for (var i=0; i<string.length;i++) {
       var character = string[i];
       if (freq[character]) {
         freq[character]++;
          duplicate[character] = freq[character];
          
       } else {
          freq[character] = 1;
          
         
       }
   }
   
   return duplicate;
   };
 let finalAnswer = getFrequency(strName)
 console.log(finalAnswer)

 let finalDuplicateAnswer = getDuplicateFrequency(strName)
 console.log(finalDuplicateAnswer)
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;