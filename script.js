// Assignment Code

//Variable names
var generateBtn = document.querySelector("#generate");
var upperCaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upperCaseLetterLength = upperCaseLetter.length;
var lowerCaseLetter = "abcdefghijklmnopqrstuvwxyz";
var lowerCaseLetterLength = lowerCaseLetter.length;
var specialCharacter = "!£$%^&*()-+=#@";
var specialCharacterLength = specialCharacter.length
var numbers = "123456789";
var numbersLength = numbers.length ;
var characterLength = "";
var generatePassword = "upperCaseLetter, lowerCaseLetter, specialCharacter, numbers";


var upperCaseAnswer = false
var lowerCaseAnswer = false;
var numbersAnswer = false;
var specialCharacterAnswer = false;

// Write password to the #password input
function writePassword() {
  if (confirm("Click OK to choose criteria")) {
    upperCaseAnswer = confirm("Do you want an uppercase letter?");
    lowerCaseAnswer = confirm("Do you want a lowercase letter?");
    numbersAnswer = confirm("Do you want numbers?");
    specialCharacterAnswer = confirm("Do you want symbols?");
    characterLength = prompt("Click to choose a number between 8 and 128");
  }
  else (alert("You need to choose a criteria"));
}

if ((lowerCaseAnswer || upperCaseAnswer || numbersAnswer || specialCharacterAnswer) && characterLength >= 8 && characterLength <= 128) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Retrieving value from prompts
var upperCaseAnswer = upperCaseLetter.charAt(Math.floor(Math.random() * upperCaseLetterLength));
var numbersAnswer = numbers.parseInt((Math.random() * (128 - 8 + 1)), 10) + 8;
var lowerCaseAnswer = lowerCaseLetter.charAt(Math.floor(Math.random() * lowerCaseLetterLength));
var specialCharacterAnswer = specialCharacter.charAt(Math.floor(Math.random() * specialCharacterLetterLength))


//If/Else statement for each character type 
// if (confirm("Click Ok if you want an uppercase letter")) {
// }
// else if (confirm("Click ok if you want a lowercase letter")) {
// }
// else if (confirm("Click ok if you want a number")) {
// }
// else if (confirm("Click ok if you want a symbol")) {
// }
// else (confirm("Click to choose a nunber between 8 and 128"))



//Pseudocode
// 1. When the user clicks the "Generate Password" button, 
// it will come up with a pop up asking them to choose a criteria (confirm & alert function)

//2. When the user clicks 'OK' for choose criteria, this will trigger a set of prompts 
// if writePassword == true, prompt x,y,z?, else "You need to choose a criteria"

//2a. User must type a character length: min=8 and max=128
//How to code? = 
//var characterLength = ?
// prompt("Click Number Between 8 and 128") {
//  if (characterLength >= 8 && characterLength <= 128) {
//    prompt();
//   } else alert("You must choose a number between 8 and 124");
// };



//2b. User must type select if they want an uppercase letter, lowercase letter, number and/or symbol
// How to code letters?
// var upperCaseLetter = true - confirm("Click ok to add an uppercase letter")
//method is string.toUpperCase()

// var lowerCaseLetter = true - confirm("Click ok to add a lowercase letter")
// medthod is string.toLowerCase()

// var symbol = true - confirm("Click ok to add a symbol")
// var number = true - conifrm ("Click ok to add a number")

//Note to self - Must add a condition that states at least 1 of the 4 criteria ✓
//must be met in order to generate a secure password. If 1 of the 4 criteria are not met, 
//the user is unable to generate a password. ✓,
//Things to think about: maybe a ternary operator? or switch statement instead of if/else?
//Put all Variable in a string and use .charAt() method to return a value to generate password 

