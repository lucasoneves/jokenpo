const options = [
  {
    value: "Pedra",
    ganha: "Tesoura",
  },
  {
    value: "Papel",
    ganha: "Pedra",
  },
  {
    value: "Tesoura",
    ganha: "Papel",
  },
];

const scoreBoard = document.querySelector('.placar');

const score = {
  player: 0,
  computer: 0,
};

let userChoice;
let computerChoice;

let winner;

function mountScoreBoard() {
  scoreBoard.innerHTML = `
    <div>Player ${score.player}x${score.computer} Computador</div>
  `
}

mountScoreBoard();

function randomChoiceComputer() {
  const choice = Math.floor(Math.random() * options.length);
  return options[choice].value;
}

function checkPlayWinner() {
  const user = options.find((choice) => {
    return choice.value === userChoice;
  });

  if (user.value === computerChoice) {
    alert("foi um empate!");
  } else if (user.ganha !== computerChoice) {
    alert("computador ganhou a rodada");
    score.computer++;
  } else {
    alert("player 1 ganhou");
    score.player++;
  }
}

document.querySelectorAll(".chose-weapon").forEach((el) => {
  el.addEventListener("click", function (e) {
    userChoice = e.target.textContent;
    computerChoice = randomChoiceComputer();
    checkPlayWinner();
    verifyScore();
    scoreBoard.innerHTML = `
      <div>
        <span>Player ${score.player}x${score.computer} Computador</span>
      </div>
    `;
  });
});

function showWinnerMessage() {
  document.getElementById('message-winner').innerHTML = `<h2>${winner} é o vencedor!!!</h2><button>Resetar Game</button>`
}

const verifyScore = () => {
  Object.entries(score).forEach(([key, value]) => {
    if (value === 5) {
      console.log(`${key} é o vencedor`);
      winner = key;
      showWinnerMessage()
    }
  });
};
