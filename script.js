// Array of special characters
var specialCharacters = [ '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.' ];

// Array of numeric characters
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters
var lowerCasedCharacters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];

// Array of uppercase characters
var upperCasedCharacters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];

// Function that returns random integer (only whole numbers)
function RAG(array) {
  var RAI= Math.floor(Math.random() * array.length);
  var RAE= array[RAI];

  return RAE;
}

// Function that creates a password depending on what the user selects
function RPG() {
  // Variables with placeholder arrays
  var finalPlaceHolder= [];
  var varietyPlaceHolder= [];
  // Variable that returns an integer based off how long the user wants their password as long as it's above 8 or below 129 characters.
  var pwLength= parseInt
  (prompt("Choose a number from 8 to 128 to choose your password length."));
  // Conditional's making sure the password is the proper length
    if(pwLength< 8) {
    alert("Your password needs to be at least 8 characters or longer.") 
  }
  if(pwLength> 128) {
    alert("Your password needs to be 128 characters or less.")
  }
  
  // Confirmation variables for different types of characters
  var chosenSC = confirm("Choose special characters?");
  var chosenNC = confirm("Choose numeric characters?");
  var chosenLCC = confirm("Choose lowercase characters?");
  var chosenUCC = confirm("Choose uppercase characters?");
  // Conitional making sure the user selects a character type
  if(!chosenSC && !chosenNC && !chosenLCC && !chosenUCC)
  {
    alert("You have to choose at least one type of character!");
    return;
  }
  // Conditional's that adds every character types-array depending on what the user selects, then pushing the randomly generated characters
  if (chosenSC) {
    varietyPlaceHolder= varietyPlaceHolder.concat(specialCharacters);
  }
  if (chosenNC) {
    varietyPlaceHolder= varietyPlaceHolder.concat(numericCharacters);
  }
  if (chosenLCC) {
    varietyPlaceHolder= varietyPlaceHolder.concat(lowerCasedCharacters);
  }
  if (chosenUCC) {
    varietyPlaceHolder= varietyPlaceHolder.concat(upperCasedCharacters);
  }

  // Iterating over pwLength and pushing finalPlaceholder character 
  for (var i= 0 ; i < pwLength; i++) {
    var character = RAG(varietyPlaceHolder);
    finalPlaceHolder.push(character);
  }
  
  // Turns finalPlaceholder pushed characters into a password
  return finalPlaceHolder.join('');
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = RPG();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);