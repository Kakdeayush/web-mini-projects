let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById("guess-input");
const checkBtn = document.getElementById("check-btn");
const messageEl = document.getElementById("message");
const attemptsEl = document.getElementById("attempts");
const restartBtn = document.getElementById("restart-btn");

checkBtn.addEventListener("click", () => {
  const userGuess = Number(guessInput.value);

  if (!userGuess || userGuess < 1 || userGuess > 100) {
    messageEl.textContent = "❌ Please enter a number between 1 and 100";
    return;
  }

  attempts++;

  if (userGuess === randomNumber) {
    messageEl.textContent = `🎉 Correct! The number was ${randomNumber}`;
    attemptsEl.textContent = `Attempts: ${attempts}`;
    restartBtn.style.display = "block";
    checkBtn.disabled = true;
  } else if (userGuess > randomNumber) {
    messageEl.textContent = "📉 Too high! Try again.";
  } else {
    messageEl.textContent = "📈 Too low! Try again.";
  }

  attemptsEl.textContent = `Attempts: ${attempts}`;
  guessInput.value = "";
});

restartBtn.addEventListener("click", () => {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  messageEl.textContent = "";
  attemptsEl.textContent = "";
  checkBtn.disabled = false;
  restartBtn.style.display = "none";
});
