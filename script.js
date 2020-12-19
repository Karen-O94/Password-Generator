// Assignment Code

//Variable names
var generateBtn = document.querySelector("#generate");
var upperCaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseLetter = "abcdefghijklmnopqrstuvwxyz";
var specialCharacter = "!£$%^&*()-+=#@";
var numbers = "0123456789";
var characterLength = parseInt("");

//var generatePassword = "upperCaseLetter, lowerCaseLetter, specialCharacter, numbers";

//Default value for variables i.e. the default answer)
var upperCaseAnswer = false;
var lowerCaseAnswer = false;
var numbersAnswer = false;
var specialCharacterAnswer = false;

//Variables for retrieving answer
var randomUpperCase = upperCaseLetter.charAt(Math.floor(Math.random() * upperCaseLetter.length));
var randomLowerCase = lowerCaseLetter.charAt(Math.floor(Math.random() * lowerCaseLetter.length));
var randomSpecial = specialCharacter.charAt(Math.floor(Math.random() * specialCharacter.length));
var randomNumbers = numbers.charAt(Math.floor(Math.random() * numbers.length));
var options = ["randomUpperCase", "randomLowerCase", "randomSpecial", "randomNumbers", "characterLength"];
var options2 = 
//var options2 = options.valueOf()

// Write password to the #password input
function writePassword() {
  //Line 30 to 42 checks the user's criteria for generating a password
  if (confirm("Click OK to choose criteria")) {
    //Checks if user wants an uppercase letter
   upperCaseAnswer = confirm("Do you want an uppercase letter?");

    //Checks if user wants a lowercase letter
    lowerCaseAnswer = confirm("Do you want a lowercase letter?");

    //Checks if user wants a numeric value
    numbersAnswer = confirm("Do you want numbers?");

    //Prompts user to choose if they want a symbol
    specialCharacterAnswer = confirm("Do you want symbols?");
    characterLength = prompt("Click to choose a number between 8 and 128");
    
    //If user chooses a number below 8 or 128, they will have an alert to enter a max of 8 & min of 128
    if (characterLength <= 7 || characterLength >= 129) {
      alert("You need to enter a number between 8 and 128")  
    } 
    else (characterLength);
  }
  else (alert("You need to choose a criteria"));

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

//Generate Password method
function generatePassword() {
 
  for (i = 0; i < characterLength; i++) {

    var randomPassword = options.toString(Math.floor(Math.random() * options.length));
    password.innerHTML += randomPassword; 

    if ((lowerCaseAnswer || upperCaseAnswer || numbersAnswer || specialCharacterAnswer) && characterLength >= 8 && characterLength <= 128) {
      return password.innerHTML += randomPassword;
    };
  }
  

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 


  // var passwordResult = []
  // if (writePassword.upperCaseAnswer === true) {
  //   for (i = 0; i < upperCaseLetter.length; ++i) {
  //     passwordResult.push(upperCaseLetter[i]);
  //   }
  // }
  // if (writePassword.lowerCaseAnswer === true) {
  //   for (i = 0; i < lowerCaseLetter.length; ++i) {
  //     passwordResult.push(lowerCaseLetter[i]);
  //   }
  // }
  // if (writePassword.numbersAnswer === true) {
  //   for (i = 0; i < numbers.length; ++i) {
  //     passwordResult.push(numbers[i]);
  //   }
  // }
  // if (writePassword.specialCharacterAnswer === true) {
  //   for (i = 0; i < specialCharacter.length; ++i) {
  //     passwordResult.push(numbers[i]);
  //   }
  // }
  // password = generatePassword.charAt(Math.floor(Math.random() * passwordResult.length));
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;


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
//   } else alert("You must choose a number between 8 and 128");
// };



//2b. User must type select if they want an uppercase letter, lowercase letter, number and/or symbol
// How to code letters?

//Note to self - Must add a condition that states at least 1 of the 4 criteria ✓
//must be met in order to generate a secure password. If 1 of the 4 criteria are not met, 
//the user is unable to generate a password. ✓,
//Things to think about: maybe a ternary operator? or switch statement instead of if/else?
//Put all Variable in a string and use .charAt() method to return a value to generate password 

