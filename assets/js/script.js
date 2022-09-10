// Assignment Code
var generateBtn = document.querySelector("#generate");

//Arrays of Characters
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numericCharacter = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@"];

function generatePassword() {

  //Prompts for password criteria
  var passwordLength = window.prompt("How may characters would you like in your password? Please enter a number between 8 and 128.");

  //Keeps password between 8 and 128
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please enter a number between 8 and 128");
    return;
  }

  var upperInclude = window.confirm("Would you like to inclue uppercase letters");
  var lowerInclude = window.confirm("Would you like to include lowercase letters?");
  var numericInclude = window.confirm("Would you like to include numbers?");
  var specialInclude = window.confirm("Would you like to include special characters?");

  var pwd = "";
  var functionsList = [];

  //Requires at least one criteria selection from user
  if (!upperInclude && !lowerInclude && !numericInclude && !specialInclude) {
    window.alert("You must select at least one character type.");
    return;

  }

  for (var i = 0; i < passwordLength; i++) {

    //Functions to get random value from each of the character arrays
    function getRndmUpper() {
      var index = Math.floor(Math.random() * upperCaseLetters.length);
      var upper = upperCaseLetters[index];
      return upper;
    }

    function getRndmLower() {
      var index = Math.floor(Math.random() * lowerCaseLetters.length);
      var lower = lowerCaseLetters[index];
      return lower;
    }

    function getRndmNum() {
      var index = Math.floor(Math.random() * numericCharacter.length);
      var num = numericCharacter[index];
      return num;
    }

    function getRndmSpcl() {
      var index = Math.floor(Math.random() * specialCharacters.length);
      var special = specialCharacters[index];
      return special;
    }

    //Creates array of functions that fit user selected criteria
    if (upperInclude) {
      functionsList.push(getRndmUpper());
    }

    if (lowerInclude) {
      functionsList.push(getRndmLower());
    }

    if (specialInclude) {
      functionsList.push(getRndmSpcl());
    }

    if (numericInclude) {
      functionsList.push(getRndmNum());
    }

    //Randomly fires the functions that fit user criteria selection to create
    //password that fits criteria
    var funIndex = Math.floor(Math.random() * functionsList.length);
    var passwordCharacter = functionsList[funIndex];
    pwd = pwd + passwordCharacter;

  }

  return pwd;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
