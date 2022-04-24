
var generateBtn = document.querySelector("#generate");
var passwordDone = document.querySelector("#password");
var password = [];
var passwordNum = false;
var passwordChar = false;
var passwordLower = false;
var passwordUpper = false;
var passwordLength = 0;
// var for character lists
var alphabetChar = "abcdefghijklmnopqrstuvwxyz".split("");
var alphabetCharUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numChar = "1234567890".split("");
var specialChar = "!#$%&\"'()*+,-./:;<=>?@[\\]^_`{|}~".split("");
var allPossibleChar = [];

// function to get length of password from user
function lengthCheck(){
    passwordLength = prompt("Pick a number between 8 and 128 for the length of your password", "Number between 8 and 128")
    if (passwordLength < 8 || passwordLength > 128){
      alert("Please choose a value between 8 and 128")
      return lengthCheck()
    }
}


// function to randomize the characters and make the password itself, called later in the click event
function passwordMaker(){

  for (var i = 0; i < passwordLength; i++){
    if (i === 0 && passwordNum === true){
      password.push(numChar[Math.floor(Math.random()*numChar.length)]);
      allPossibleChar = allPossibleChar.concat(numChar);
    } else if(i === 1 && passwordChar === true){
      password.push(specialChar[Math.floor(Math.random()*specialChar.length)]);
      allPossibleChar = allPossibleChar.concat(specialChar);
    } else if(i === 2 && passwordUpper === true){
      password.push(alphabetCharUpper[Math.floor(Math.random()*alphabetCharUpper.length)]);
      allPossibleChar = allPossibleChar.concat(alphabetCharUpper);
    } else if (i === 3 && passwordLower === true){
      password.push(alphabetChar[Math.floor(Math.random()*alphabetChar.length)]);
      allPossibleChar = allPossibleChar.concat(alphabetChar);
    } else {
      password.push(allPossibleChar[Math.floor(Math.random()*allPossibleChar.length)]);
    }
      
     
  }
}



// function called on click to retrieve rest of the confirm windows for necessary characters and present the password
function writePassword() {
  passwordNum = confirm("Click 'OK' if your password needs a number. \n Click cancel if it does not.")
  passwordChar = confirm("Click 'OK' if your password needs a special character. \n Click cancel if it does not.")
  passwordUpper = confirm("Click 'OK' if your password needs a uppercase letter. \n Click cancel if it does not.")
  passwordLower = confirm("Click 'OK' if your password needs a lowercase letter. \n Click cancel if it does not.")
  
  lengthCheck();
  passwordMaker();
  var passwordFull = password.join("");
  passwordDone.textContent = passwordFull;
  console.log(passwordDone);
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);












// var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  // passwordText.value = password;
  // alphabetChar[Math.floor(Math.random()*alphabetChar.length)]
  // numChar[Math.floor(Math.random()*numChar.length)]
  // specialChar[Math.floor(Math.random()*specialChar.length)]
  // items[Math.floor(Math.random()*items.length)]
