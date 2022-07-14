const options = ['Pedra', 'Papel', 'Tesoura'];

function randomChoiceComputer() {
  return 'Papel'
}

document.querySelectorAll('.chose-weapon').forEach(el => el.addEventListener('click',function (e) {
  console.log('eu escolho', e.target.textContent);
  console.log('escolha do computador', randomChoiceComputer())
}));

function handleChoosenWeapon(e) {
  e.preventDefault();
  console.log('hey')
}

const playerSelection = "paper";
const computerSelection = computerPlay();

computerPlay();

game();
