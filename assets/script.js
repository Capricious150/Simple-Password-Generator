
// Starting by declaring a few global arrays.
// I decided to put the numbers as strings to avoid mixing string and number types.
// And I decided to make an array of uppercase letters, rather than using a "toUpperCase()" method just to keep things
// simpler while writing. I may do a second iteration of this assignment which does the reverse.

// Theoretically neither the number string nor the uppercase string arrarys are necessary, as I could use 
// Math.floor() and Math.random() for the former, and toUpperCase() for the latter. 

//Array 'numbers' has each number twice. This is to make it have a length of 20
//My reasoning for this is based on ratios: Without doing this, the arrays have lengths of 26, 26, 10, and 20. 
//With the way I ultimately build the password, this would mean only 12.2% of the characters would be numbers
//if the user selects all character types. I wanted the ratio to be somewhat more even.
//By doubling up the numbers, there is a 21.7% chance that a given character will be a number in that scenario, which
// is close enough to 25% for me. 

var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["1","2","3","4","5","6","7","8","9","0","1","2","3","4","5","6","7","8","9","0"];
var specialChars = ["!","@","#","$","%","^","&","*","(",")",",",".","<",">","?","-","+","=","~","`","'","/"];

function generatePassword(){
// Declaring an empty (for now) array which will ultimately be the array the password generator pulls from.
  var pwArray = [];
  
// Recycling my random number function from another project
  var random = {
    getRandomInt: function(max){
      return Math.floor(Math.random() * max);
    }
  }
  
// Setting two Boolean values for upcoming While loops
  var validLength = false;
  var hasContent = false;

// First a while loop to make sure that the user enters a number between 8 and 128 (inclusive)

    while (validLength === false) {

    var pwLength = prompt("How many characters would you like your password to be")

      if ((pwLength > 7) && (pwLength < 129)){
        validLength = true  
      } else {
        alert("Please enter a number from 8 to 128");
      }
    }

// Next a while loop to make sure the user chooses at least one type of character. The Boolean values used
// here will also be used later to determine how the password array is read

    while (hasContent === false){

    var includeLower = confirm("Include lower case characters?");
    var includeUpper = confirm("Include upper case characters?");
    var includeNumber = confirm("Include numbers?");
    var includeSpecial = confirm("Include special characters?")

    if ((includeLower === false) && (includeUpper === false) && (includeNumber === false) && (includeSpecial === false)){
      alert("Please choose at least one type of character to be included in the password")
    } else {
      hasContent = true;
    }
  }

// Remember earlier when I declared the empty array "pwArray"? Now we're going to build that array.
// Four "if" checks using the bools from the previous while loop, using .concat to merge the relevant arrays from global

  if (includeLower === true){
    pwArray = pwArray.concat(lowerCase);
  }

  if (includeUpper === true){
    pwArray = pwArray.concat(upperCase);
  }

  if (includeNumber === true){
    pwArray = pwArray.concat(numbers);
  }

  if (includeSpecial === true){
    pwArray = pwArray.concat(specialChars);
  }

// We're in the homestretch now. Declaring a variable "finalPW". Using a for-loop which will iterate a number of
// times equal to the character length the user input above. Once that variable is done being defined, return it.

  var finalPW = "";

  for (let i = 0; i < pwLength; i++) {
    finalPW = finalPW.concat(pwArray[random.getRandomInt(pwArray.length)]);
   }

  return finalPW;
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
