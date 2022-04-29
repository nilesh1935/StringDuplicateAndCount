// Import stylesheets
import './style.css';

//Find the duplicate characters that are present in the below mentioned string. Also you have to find out the count of each duplicate characters i.e., how many times each duplicate characters are occurring in the string. Finally, your solution should have a time complexity of O(n).



//AAasdsTERUIfg%#$,gfhADcvbm89ADSasopkJFDP78kfdm^$*(gkfld()()()()


//
// Write Javascript code!

let strName = "AAasdsTERUIfg%#$,gfhADcvbm89ADSasopkJFDP78kfdm^$*(gkfld()()()()"

function getFrequency(string) {
  var freq = {};
  for (var i=0; i<string.length;i++) {
      var character = string.charAt(i);
      if (freq[character]) {
         freq[character]++;
      } else {
         freq[character] = 1;
        
      }
  }
  
  return freq;
  };

let finalAnswer = getFrequency(strName)
console.log(finalAnswer)
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;