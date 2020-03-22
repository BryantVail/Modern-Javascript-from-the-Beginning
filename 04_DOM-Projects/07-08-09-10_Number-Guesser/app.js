//07-08-09-10_Number-Guesser

/*
  GAME FUNCTION: 
    -must guess a number between min & max
    -guess count limited
    -display remaining guesses
    -loss:  show correct answer
    -win:   show correct answer
    -allow playing again
*/

// Game Values
let min = 1,
  max = 10,
  winningNumber = 2,
  guessesLeft = 3;

// UI Elements
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessInput = document.querySelector("#guess-input"),
  guessBtn = document.querySelector("#guess-btn"),
  message = document.querySelector(".message"),
  playAgain = "Play Again!";

//Assign UI min & max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener("click", function(e) {
  let guessNumber = parseInt(guessInput.value);
  console.log(`button pressed, input: ${guessNumber}`);

  if (resetGame()) {
    return;
  }

  if (isNaN(guessNumber) || guessNumber < min || guessNumber > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  }

  // Check against winning number
  if (guessNumber === winningNumber) {
    // disable
    guessInput.disabled = true;
    setMessage(`You won! The winning number is: ${winningNumber}`, "green");
    guessInput.style.borderColor = "green";
    guessBtn.value = playAgain;
  }

  e.preventDefault();
});

function resetGame() {
  if (guessBtn.value == playAgain) {
    guessBtn.value = "Submit";
    guessInput.value = "";
    message.textContent = "";
    return true;
  }
}

function setMessage(string, color) {
  message.style.color = color;
  message.textContent = string;
}
