let gameResult = document.getElementById('winner');
let bothScore = document.getElementById('score');
let playerSelection = document.getElementById('player-selection');
let computerSelection = document.getElementById('computer-selection');
let gameChoices = document.querySelectorAll('.game-choice');
let selectionContainer = document.querySelector('.selection-container');
let gameContainer = document.querySelector('.game-options');
let playAgain = document.getElementById('replay');

let playerScore = 0;
let computerScore = 0;

gameChoices.forEach(choices => {
  choices.addEventListener('click', () => {
    let humanSelect = choices.getAttribute('gameAttribute');
    let computerSelect = computerPlay();
    playRound(humanSelect, computerSelect);
    playerSelection.textContent = humanSelect;
    computerSelection.textContent = computerSelect;
    bothScore.textContent = `${playerScore} - ${computerScore}`;
    gameWinner(playerScore, computerScore);
  });
});

const computerPlay = () => {
  let choices = ['rock', 'paper', 'scissors'];
  let randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
};

const gameWinner = (a, b) => {
  if (a === 5) {
    gameResult.textContent = 'Player wins the game!';
    playerScore = 0;
    computerScore = 0;
    gameContainer.style.display = 'none';
    selectionContainer.style.display = 'none';
    playAgain.classList.remove('hidden');
  } else if (b === 5) {
    gameResult.textContent = 'Computer wins the game!';
    playerScore = 0;
    computerScore = 0;
    gameContainer.style.display = 'none';
    selectionContainer.style.display = 'none';
    playAgain.classList.remove('hidden');
  };
};

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

const replayGame = () => {
  gameContainer.style.display = 'flex';
  selectionContainer.style.display = 'flex';
  gameResult.textContent = 'Choose your weapon!';
  bothScore.textContent = `${playerScore} - ${computerScore}`;
  playerSelection.textContent = 'Player';
  computerSelection.textContent = 'Computer';
  playAgain.classList.add('hidden');
};

playAgain.addEventListener('click', replayGame);

window.onload = () => {
  gameResult.textContent = 'Choose your weapon!';
  bothScore.textContent = `${playerScore} - ${computerScore}`;
  playerSelection.textContent = 'Player';
  computerSelection.textContent = 'Computer';
};