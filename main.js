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

function randomChoiceComputer() {
  const choice = Math.floor(Math.random() * options.length);
  return options[choice].value;
}

document.querySelectorAll(".chose-weapon").forEach((el) =>
  el.addEventListener("click", function (e) {
    console.log("eu escolho", e.target.textContent);
    console.log("escolha do computador", randomChoiceComputer());
  })
);
