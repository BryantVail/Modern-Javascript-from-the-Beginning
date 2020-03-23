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
  winningNumber = getRandomNumber(),
  guessesLeft = 3;

// UI Elements
const gameWrapper = document.querySelector("#game"),
  UIminNum = document.querySelector(".min-num"),
  UImaxNum = document.querySelector(".max-num"),
  UIguessInput = document.querySelector("#guess-input"),
  UIguessBtn = document.querySelector("#guess-btn"),
  UImessage = document.querySelector(".message"),
  playAgain = "Play Again!";

//Assign UI min & max
UIminNum.textContent = min;
UImaxNum.textContent = max;

//play again event listener
//-> using 'mousedown' bc if a click is captured, its going to
//-> not show the 'play again' and run at the same time and not show
//-> the message due to the other event handler
gameWrapper.addEventListener("mousedown", function(e) {
  console.log(1);

  if (e.target.classList.contains("game-over")) {
    window.location.reload();
  }
});

// Listen for guess
UIguessBtn.addEventListener("click", function(e) {
  let guessNumber = parseInt(UIguessInput.value);
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

    gameOver(true, `You won! The winning number is: ${winningNumber}`);
  } else {
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      //game over
      gameOver(false, `Game Over! The number to guess was ${winningNumber}`);
    } else if (guessesLeft === 1) {
      //game continues
      UIguessInput.value = "";
      setMessage(
        `Incorrect guess of ${guessNumber}, ${guessesLeft} Final Guess Left `,
        "red"
      );
    } else {
      //game continues
      UIguessInput.value = "";
      setMessage(
        `Incorrect guess of ${guessNumber}, ${guessesLeft} Guesses Left`,
        "red"
      );
    }
  }

  e.preventDefault();
});

function gameOver(won, message) {
  let color;
  //ternary operator
  won === true ? (color = "green") : (color = "red");

  UIguessInput.disabled = true;
  UIguessInput.style.borderColor = color;
  UIguessBtn.value = "Play Again?";
  setMessage(message, color);

  //add game-over class to submit button
  UIguessBtn.classList.add("game-over");
}

function resetGame() {
  if (UIguessBtn.classList.contains("game-over")) {
    UIguessBtn.value = "Submit";
    UIguessInput.disabled = false;
    UIguessInput.style.borderColor = "black";
    UIguessInput.value = "";
    UImessage.textContent = "";
    winningNumber = getRandomNumber();
    return true;
  }
}

function getRandomNumber(minNum, maxNum) {
  // Math.floor rounds down, since we're adding 'min' to the value we choose, we'll
  //-> never get zero
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function setMessage(string, color) {
  UImessage.style.color = color;
  UImessage.textContent = string;
}
