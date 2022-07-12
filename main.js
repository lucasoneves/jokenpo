function computerPlay() {
  return 'rock';
}

function playRound(playerSelection, computerSelection) {
  const message = `You Lose. ${computerSelection} beats ${playerSelection}`;
  console.log(message);
  return playerSelection.toUpperCase(), computerSelection;
}

function game() {
    for (let i = 0; i < 5; i++) {
        // your code here!
        playRound(playerSelection, computerSelection);
     }
  
}

const playerSelection = "paper";
const computerSelection = computerPlay();

computerPlay();

game();
