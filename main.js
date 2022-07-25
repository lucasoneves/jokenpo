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

const scoreBoard = document.querySelector(".placar");

const score = [
  { name: "Player", points: 0, id: 1 },
  { name: "Computador", points: 0, id: 2 },
];

let userChoice;
let computerChoice;

let winner;

const contentLogRounds = document.querySelector(".log-messages");

function mountScoreBoard() {
  scoreBoard.innerHTML = `
    <div>${score[0].name} ${score[0].points} x ${score[1].points} ${score[1].name}</div>
  `;
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
    contentLogRounds.innerHTML += "<h2>Foi um empate</h2>";
  } else if (user.ganha !== computerChoice) {
    contentLogRounds.innerHTML += "<h2>Computador ganhou a rodada</h2>";
    score[1].points++;
  } else {
    contentLogRounds.innerHTML += "<h2>Player ganhou a rodada</h2>";
    score[0].points++;
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
        <span>Player ${score[0].points} x ${score[1].points} Computador</span>
      </div>
    `;
  });
});

function showWinnerMessage() {
  document.querySelectorAll(".chose-weapon").forEach((el) => {
    el.setAttribute("disabled", true);
  });
  contentLogRounds.innerHTML += `<h2>${winner} é o vencedor!!!</h2>`;
  const button = document.createElement("button");
  button.textContent = 'Resetar game';
  button.setAttribute('id', 'reset-game-btn')
  document.querySelector('.log-messages').appendChild(button);
  document.getElementById('reset-game-btn').addEventListener('click', resetGame)
}

const verifyScore = () => {
  score.map((player) => {
    if (player.points === 5) {
      console.log(`${player.name} é o vencedor`);
      winner = player.name;
      showWinnerMessage();
    }
  });
};



function resetGame() {
  // score.map((item) => {
  //   [...item, (item.points = 0)];
  // });
  console.log('reset game function called')
}
