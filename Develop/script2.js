
function passwordGenerator(pw) {
  var passLength = window.prompt("How many characters would you like the password to be?", "Enter number"); {
    if (passLength === null) {
      return "Click button to generate password";
    }
    else if (passLength < 8 || passLength > 129) {
      while (passLength < 8 || passLength > 129) {
        window.alert("Password length must be between 8 and 129 characters");
        passLength = window.prompt("How many characters would you like the password to be?", "Enter number");
      }
    }
    else {
      console.log(passLength);
    }
  }

  do {
    var specChar = '!@#$%^&*()<>?;:';
    var specCharConfirm = window.confirm("Would you like to include special characters?");

    var numChar = '0123456789';
    var numCharConfirm = window.confirm("Would you like to include numeric characters?");

    var uppCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var uppCaseConfirm = window.confirm("Would you like to include uppercase letters?");

    var lowCaseChar = "abcdefghijklmnopqrstuvwxyz";
    var lowCaseConfirm = window.confirm("Would you like to include lowercase letters?");

    if (!specCharConfirm && !numCharConfirm && !uppCaseConfirm & !lowCaseConfirm) {
      window.alert("Must select at least one parameter!");
    }
  } while (!specCharConfirm && !numCharConfirm && !uppCaseConfirm & !lowCaseConfirm)

  window.alert("PASSWORD PARAMETERS \nCharacter Length: " + passLength +
    "\nSpecial characters included: " + specCharConfirm +
    "\nNumeric characters included: " + numCharConfirm +
    "\nUppercase letters included: " + uppCaseConfirm +
    "\nLowercase letters included: " + lowCaseConfirm
  );

  var password = "";
  var character = "";


  while (password.length < passLength) {

    randomLow = Math.floor(lowCaseChar.length * Math.random() * Math.random());
    randomUpp = Math.floor(uppCaseChar.length * Math.random() * Math.random());
    randomNum = Math.floor(numChar.length * Math.random() * Math.random());
    randomSpec = Math.floor(specChar.length * Math.random() * Math.random());

    if (specCharConfirm) {
      character += specChar.charAt(randomSpec);
    }

    if (numCharConfirm) {
      character += numChar.charAt(randomNum);
    }

    if (uppCaseConfirm) {
      character += uppCaseChar.charAt(randomUpp);
    }

    if (lowCaseConfirm) {
      character += lowCaseChar.charAt(randomLow);
    } 
    password = character;
  } 
password = password.split('').sort(function () {return 0.5 - Math.random() }).join('');
return password.substring(0, pw);
    
}

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var displayPW = passwordGenerator();
  passwordText = document.querySelector("#password");
  passwordText.value = displayPW;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


