// Assignment Code
var generateBtn = document.querySelector("#generate");
var mainEl =document.getElementById("main");

var ucase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var special ="!@#$%^&*()"
var lcase ="abcdefghijklmnopqrstuvwxyz"
var number =1234567890

var useUpper = true;
var useLower = true;
var useSpecial = true;
var useNumber = true;

// Write password to the #password input
function writePassword() {
  var password = ("password");
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function RandomPassword(){
	var ucase = generatePassword();
	var lcase = generatePassword();
	var special = generatePassword();
	var number = generatePassword();

	var passwordText = document.querySelector("#password");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
