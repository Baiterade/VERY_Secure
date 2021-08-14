// Assignment Code
var generateBtn = document.querySelector("#generate");

// Prompt for all parameters and write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Runs through prompts
function generatePassword() {
  var charSelection = "";
  var newpassword = "";

  //Asks for desired length
  var length = prompt("How long should the password be?", " (8-128)");

  //Asks for desired character types
  var lowercase = prompt("Would you like to use lowercase?", "")
  var uppercase = prompt("Would you like to use uppercase?", "")
  var numeric = prompt("Would you like to use numbers?", "")
  var specChar = prompt("Would you like to use special characters?", "")

  if(lowercase == "yes" || lowercase == "Yes"){
    charSelection += "qwertyuioplkjhgfdsazxcvbnm";
  }

  if(uppercase == "yes" || uppercase == "Yes"){
    charSelection += "QWERTYUIOPLKJHGFDSAZXCVBNM";
  }

  if(numeric == "yes" || numeric == "Yes"){
    charSelection += "1234567890";
  }

  if(specChar == "yes" || specChar == "Yes"){
    charSelection += "!@#$%^&*-_+=,.<>/?:";
  }
  
  //Final set of characters to be used
  console.log(charSelection);

  //Array of usable characters
  var charSelection = charSelection.split("");

  console.log(charSelection);

  //Picks random characters from charSelection, until the desired length is met
  for (var i = 0; i < length; i++){
    newpassword += charSelection[Math.round(Math.random()*charSelection.length)]
  }

  //Created password
  console.log(newpassword);

  return(newpassword);

}