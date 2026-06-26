const minNumber = 1;
const maxNumber = 100;
const maxAttempts = 10;
const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
let guess;
let attempts = 0;
let running = true;

while(running){
  guess =window.prompt(`Guess a number between ${minNumber} and ${maxNumber}`)
  let guessNumber = parseInt(guess);
  if (isNaN(guessNumber)) {
    window.alert("Please enter a valid number.");
    continue;
  }
  attempts++;
  if (guessNumber === randomNumber) {
    window.alert(`Congratulations! You guessed the number in ${attempts} attempts.`);
    running = false;
  } else if (attempts >= maxAttempts) {
    window.alert(`Game over! The number was ${randomNumber}.`);
    running = false;
  } else if (guessNumber < randomNumber) {
    window.alert("Too low! Try again.");
  } else {
    window.alert("Too high! Try again.");
  }
}
