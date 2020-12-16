var generateBtn = document.querySelector("#generate");
var characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",

    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


var uppercaseNum = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",

    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",

    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

var num = confirm("Are numbers required for your new password?");
var whichcase = confirm("Do you want uppercase letters?");
var charSet = prompt("How many characters will you new password have?");

let password = ``;

console.log(num);
console.log(whichcase);
console.log(charSet);

if (num === true && whichcase === true) {
    for (var i = 0; i < charSet; i++) {

        charPick = uppercaseNum[Math.floor(Math.random() * uppercaseNum.length)]; console.log(charPick);
        password = password.toString() + charPick.toString(); console.log(password);
    }
}

