const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}

// TODO 1: write a validator 
// that ensures input starts with "a"
let isValidName = function(name) {
   if (name[0]=='a') {
      return true;
   }

   return false;
};

console.log(getValidInput('Enter Name:', isValidName));
// TODO 2: write a validator 
// that ensures input is a vowel

