// Assignment Code
var generateBtn = document.querySelector("#generate");

// Prompt for all parameters and write password to the #password text area
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Runs through prompts
function generatePassword() {
  var newpassword = "";

  let lowercaseString = "qwertyuioplkjhgfdsazxcvbnm";
  let uppercaseString = "QWERTYUIOPLKJHGFDSAZXCVBNM";
  let numericString = "0123456789";
  let specCharString = "!@#*+=<>?:";

  const lowercaseArray = lowercaseString.split("");
  const uppercaseArray = uppercaseString.split("");
  const numericArray = numericString.split("");
  const specCharArray = specCharString.split("");

  //Asks for desired length
  var length = prompt("How long should the password be?", " (8-128)");

  //Asks for desired character types
  var lowercaseP = confirm("Would you like to use lowercase letters?");
  console.log(lowercaseP);
  var uppercaseP = confirm("Would you like to use uppercase letters?");
  console.log(uppercaseP);
  var numericP = confirm("Would you like to use numbers?");
  console.log(numericP);
  var specCharP = confirm("Would you like to use special characters?");
  console.log(specCharP);

  if ((lowercaseP || uppercaseP || numericP || specCharP) && (length >= 8 && length <= 128)) {

    while(newpassword.length < length){
      if (lowercaseP){
        newpassword += lowercaseArray[Math.round(Math.random()*lowercaseArray.length)]
        if (newpassword.length == length) {
          break;
        }
      }

      if (uppercaseP){
        newpassword += uppercaseArray[Math.round(Math.random()*uppercaseArray.length)]
        if (newpassword.length == length) {
          break;
        }
      }

      if (numericP){
        newpassword += numericArray[Math.round(Math.random()*numericArray.length)]
        if (newpassword.length == length) {
          break;
        }
      }

      if (specCharP){
        newpassword += specCharArray[Math.round(Math.random()*specCharArray.length)]
        if (newpassword.length == length) {
          break;
        }
      }

      console.log(newpassword);
      }
  } else {
    confirm("Error: Please select a length between 8 and 128, and at least one criteria.");
  }
  
  var shuffleArray = newpassword.split("");
  shuffleArray.sort(() => Math.random() - 0.5);
  newpassword = shuffleArray.join("");

  //Created password
  console.log(newpassword);

  return(newpassword);

}