// Get DOM elements
let gameResult = document.getElementById('winner'); // Element to display game result
let bothScore = document.getElementById('score'); // Element to display both player and computer scores
let playerSelection = document.getElementById('player-selection'); // Element to display player's selection
let computerSelection = document.getElementById('computer-selection'); // Element to display computer's selection
let gameChoices = document.querySelectorAll('.game-choice'); // Array of game choice elements
let selectionContainer = document.querySelector('.selection-container'); // Container for player and computer selections
let gameContainer = document.querySelector('.game-options'); // Container for game options
let playAgain = document.getElementById('replay'); // Button to replay the game

let playerScore = 0; // Player's score
let computerScore = 0; // Computer's score

// Add event listeners to game choice elements
gameChoices.forEach(choices => {
  choices.addEventListener('click', () => {
    let humanSelect = choices.getAttribute('gameAttribute'); // Get player's selection
    let computerSelect = computerPlay(); // Get computer's selection
    playRound(humanSelect, computerSelect); // Play a round of the game
    playerSelection.textContent = humanSelect; // Display player's selection
    computerSelection.textContent = computerSelect; // Display computer's selection
    bothScore.textContent = `${playerScore} - ${computerScore}`; // Display both player and computer scores
    gameWinner(playerScore, computerScore); // Check if there is a game winner
  });
});

// Function to randomly select computer's choice
const computerPlay = () => {
  let choices = ['rock', 'paper', 'scissors'];
  let randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
};

// Function to check if there is a game winner
const gameWinner = (a, b) => {
  if (a === 5) {
    gameResult.textContent = 'Player wins the game!';
    playerScore = 0;
    computerScore = 0;
    gameContainer.style.display = 'none'; // Hide game options
    selectionContainer.style.display = 'none'; // Hide player and computer selections
    playAgain.classList.remove('hidden'); // Show replay button
  } else if (b === 5) {
    gameResult.textContent = 'Computer wins the game!';
    playerScore = 0;
    computerScore = 0;
    gameContainer.style.display = 'none'; // Hide game options
    selectionContainer.style.display = 'none'; // Hide player and computer selections
    playAgain.classList.remove('hidden'); // Show replay button
  };
};

// Function to play a round of the game
const playRound = (playerChoice, computerChoice) => {
  switch (playerChoice + computerChoice) {
    case 'rockscissors':
      gameResult.textContent = 'You win! Rock beats Scissors!';
      playerScore++;
      break;
    case 'rockpaper':
      gameResult.textContent = 'You lose! Paper beats Rock!';
      computerScore++;
      break;
    case 'paperrock':
      gameResult.textContent = 'You win! Paper beats Rock!';
      playerScore++;
      break;
    case 'paperscissors':
      gameResult.textContent = 'You lose! Scissors beats Paper!';
      computerScore++;
      break;
    case 'scissorspaper':
      gameResult.textContent = 'You win! Scissors beats Paper!';
      playerScore++;
      break;
    case 'scissorsrock':
      gameResult.textContent = 'You lose! Rock beats Scissors!';
      computerScore++;
      break;
    default:
      gameResult.textContent = 'It\'s a tie!';
      break;
  };
};

// Function to replay the game
const replayGame = () => {
  gameContainer.style.display = 'flex'; // Show game options
  selectionContainer.style.display = 'flex'; // Show player and computer selections
  gameResult.textContent = 'Choose your weapon!';
  bothScore.textContent = `${playerScore} - ${computerScore}`;
  playerSelection.textContent = 'Player';
  computerSelection.textContent = 'Computer';
  playAgain.classList.add('hidden'); // Hide replay button
};

playAgain.addEventListener('click', replayGame); // Add event listener to replay button

// Initialize game state when the window loads
window.onload = () => {
  gameResult.textContent = 'Choose your weapon!';
  bothScore.textContent = `${playerScore} - ${computerScore}`;
  playerSelection.textContent = 'Player';
  computerSelection.textContent = 'Computer';
};