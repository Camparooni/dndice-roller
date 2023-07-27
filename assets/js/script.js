const rollbtn = document.getElementById('rollbtn');
const currentRollInput = document.getElementById('currentRoll');
const previousRollsDiv = document.getElementById('previousRolls');
const diceInputs = document.querySelectorAll('input[type="checkbox"]');
let selectedDice = 6; // Default to D6

let previousRolls = [];

function rollDice(selectedDice) {
    console.log(selectedDice)

  const diceNumber = Math.floor(Math.random() * selectedDice) + 1;

  currentRollInput.value = diceNumber;


  previousRolls.push(diceNumber);


  if (previousRolls.length > 10) {
    previousRolls.shift();
  }


  previousRollsDiv.innerHTML = "Previous Rolls: " + previousRolls;
}




diceInputs.forEach(input => {
input.addEventListener('change', () => {
    if (input.checked) {
      selectedDice = input.id;
      console.log("hello")
      console.log(input.id)
      console.log(selectedDice)
      
      /*rollDice(input.id);*/
    }
  });
});

rollbtn.addEventListener('click', () => {rollDice(selectedDice)})