
function passwordGenerator(pw) {
  var passLength = window.prompt("How many characters would you like the password to be?", "Enter number"); {
    numPassLength = parseInt(passLength);

    if (!passLength) {
      return "Click button to generate password";
    }

    if (isNaN(passLength)) {
      window.alert("Please enter a number");
      return "Click button to generate password";
    }

    if (numPassLength < 8 || numPassLength > 129) {
      while (numPassLength < 8 || numPassLength > 129) {
        window.alert("Password length must be between 8 and 129 characters");
        return "Click button to generate password";
      }

    } else {
      console.log(numPassLength);
    }
  }

  do {
    var specChar = ' !"#$%&()*+,-./:;<=>?@[\]^_`{|}~';
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

  //PASSWORD PARAMETERS
  var passParameters = window.confirm("PASSWORD PARAMETERS \nCharacter Length: " + numPassLength +
    "\nSpecial characters included: " + specCharConfirm +
    "\nNumeric characters included: " + numCharConfirm +
    "\nUppercase letters included: " + uppCaseConfirm +
    "\nLowercase letters included: " + lowCaseConfirm
  ); {
    if (!passParameters) {
      return "Click button to generate password";
  }
}

  // VARIABLES
  var password = "";
  var character = "";

  while (password.length < numPassLength) {

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
  password = password.split('').sort(function () { return 0.5 - Math.random() }).join('');
  password = password.slice(0,[numPassLength]);
  
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