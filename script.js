let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById('guessInput');
const submitGuess = document.getElementById('submitGuess');
const feedback = document.getElementById('feedback');
const resetGameButton = document.getElementById('resetGame');

submitGuess.addEventListener('click', () => {
  const guess = Number(guessInput.value);
  attempts++;

  if (guess < secretNumber) {
    feedback.textContent = 'Too low! Try again.';
  } else if (guess > secretNumber) {
    feedback.textContent = 'Too high! Try again.';
  } else {
    feedback.textContent = `Correct! You guessed it in ${attempts} attempts.`;
    submitGuess.disabled = true; // Disable guess button after success
    resetGameButton.style.display = 'inline-block'; // Show reset button
  }

  guessInput.value = ''; // Clear the input
  guessInput.focus(); // Focus on the input field for the next guess
});

// Reset game
resetGameButton.addEventListener('click', () => {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  feedback.textContent = '';
  guessInput.value = '';
  submitGuess.disabled = false;
  resetGameButton.style.display = 'none';
});
