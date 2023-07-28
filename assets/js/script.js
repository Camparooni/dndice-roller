async function getRandomNumber(min, max) {
  try {
    const response = await fetch(`https://www.randomnumberapi.com/api/v1.0/random?min=${min}&max=${max}&count=1`);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data[0];
  } catch (error) {
    console.error('Error fetching random number:', error);
    return null;
  }
}

    const diceNumber = Math.floor(Math.random() * selectedDice) + 1;

    currentRollInput.value = diceNumber;


    previousRolls.push(diceNumber);


    if (previousRolls.length > 10) {
    previousRolls.shift();
}


    previousRollsDiv.innerHTML = previousRolls;


const rollbtn = document.getElementById('rollbtn');
const currentRollInput = document.getElementById('currentRoll');
const previousRollsDiv = document.getElementById('previousRolls');
const diceInputs = document.querySelectorAll('input[type="radio"]'); // Corrected the selector for radio inputs
const diceImage = document.getElementById('diceimage');
let selectedDice = 6; // Default to D6

let previousRolls = [];

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

rollbtn.addEventListener('click', () => {
  if (diceImage.classList.contains('visible')) {
    rollDice(selectedDice);
  }
});