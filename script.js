// Assignment Code
var generateBtn = document.querySelector("#generate");
var mainEl =document.getElementById("main");

var ucase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var special ="!@#$%^&*()"
var lcase ="abcdefghijklmnopqrstuvwxyz"
var number ="1234567890"
var possiblecharacters = ""
//for loop combine all for loops into one string to go through. 
// change length, based off of pw password (second part of the loop) 
// inside the loop Math.floor(Math.random() * possiblecharacters.length);


//for (i=0; i<""; i++){
	//possiblecharacters = ucase+special+lcase+number+i;


// Write password to the #password input
function writePassword() {
	promptpassword()
  var password = ("password");
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function promptpassword() {
var pwLength = window.prompt ("How many characters would you like?")
var useUpper = confirm ("Confirm Uppercase letters?")
var useLower = confirm("Confirm Lowercase Letters?")
var useSpecial = confirm ("Confirm special characters")
var useNumber = confirm("Confirm Numbers")
}