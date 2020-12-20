////Variable names
var generateBtn = document.querySelector("#generate");
var upperCaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseLetter = "abcdefghijklmnopqrstuvwxyz";
var specialCharacter = "!£$%^&*()-+=#@";
var numbers = "0123456789";

// Assignment code 
// Write password to the #password input
function writePassword() {
  //If user chooses a number below 8 or 128, they will have an alert to enter a max of 8 & min of 128
  var characterLength = parseInt(prompt("How many characters do you want in your password?")); 
  if (characterLength >= 8 || characterLength <= 128) {
    //Checks if user wants an uppercase letter
    upperCaseAnswer = confirm("Do you want an uppercase letter?");

    //Checks if user wants a lowercase letter
    lowerCaseAnswer = confirm("Do you want a lowercase letter?");

    //Checks if user wants a numeric value
    numbersAnswer = confirm("Do you want numbers?");

    //Prompts user to choose if they want a symbol
    specialCharacterAnswer = confirm("Do you want symbols?");

    if (upperCaseAnswer == false || lowerCaseAnswer == false || numbersAnswer == false) {
      alert("You need to choose to a criteria")
    }
    
  } 
  else {
    alert("You need to enter a number between 8 and 128");
  } 

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};


//Default value for variables i.e. the default answer)
// var upperCaseAnswer = false;
// var lowerCaseAnswer = false;
// var numbersAnswer = false;
// var specialCharacterAnswer = false;

//Variables for retrieving answer
var randomUpperCase = upperCaseLetter.charAt(Math.floor(Math.random() * upperCaseLetter.length));
var randomLowerCase = lowerCaseLetter.charAt(Math.floor(Math.random() * lowerCaseLetter.length));
var randomSpecial = specialCharacter.charAt(Math.floor(Math.random() * specialCharacter.length));
var randomNumbers = numbers.charAt(Math.floor(Math.random() * numbers.length));
var options = [randomUpperCase, randomLowerCase, randomSpecial, randomNumbers, characterLength];

//Generate Password method
function generatePassword() {
 
  for (i = 0; i < characterLength; i++) {

    var randomPassword = options.toString(Math.floor(Math.random() * characterLength));
    password.innerHTML += randomPassword; 

    // var randomPassword = options.toString(Math.floor(Math.random() * options.length));
    // password.innerHTML += randomPassword; 

    if ((lowerCaseAnswer || upperCaseAnswer || numbersAnswer || specialCharacterAnswer) && characterLength >= 8 && characterLength <= 128) {
      return password.innerHTML += randomPassword;
    };
  }
  

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 