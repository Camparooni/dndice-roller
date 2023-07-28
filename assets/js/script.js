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

<<<<<<< HEAD
async function rollDice(selectedDice) {
  const min = 1;
  const max = selectedDice;

  const diceNumber = await getRandomNumber(min, max);
=======
    const diceNumber = Math.floor(Math.random() * selectedDice) + 1;
>>>>>>> 2d4978b4430898f9dd61617034e9c061a00608e5

    currentRollInput.value = diceNumber;

<<<<<<< HEAD
  previousRolls.push(diceNumber);

  if (previousRolls.length > 10) {
=======

    previousRolls.push(diceNumber);


    if (previousRolls.length > 10) {
>>>>>>> 2d4978b4430898f9dd61617034e9c061a00608e5
    previousRolls.shift();
}

<<<<<<< HEAD
  previousRollsDiv.innerHTML = previousRolls;
=======

    previousRollsDiv.innerHTML = previousRolls;
>>>>>>> 2d4978b4430898f9dd61617034e9c061a00608e5
}

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
<<<<<<< HEAD
      selectedDice = parseInt(input.value);
      diceImage.src = `./assets/img/d${selectedDice}.png`;
      diceImage.classList.add('visible'); // Show the dice image
      currentRollInput.value = '';
=======
        selectedDice = input.id;
        console.log("hello")
        console.log(input.id)
        console.log(selectedDice)
    /*rollDice(input.id);*/
>>>>>>> 2d4978b4430898f9dd61617034e9c061a00608e5
    }
});
});

rollbtn.addEventListener('click', () => {
  if (diceImage.classList.contains('visible')) {
    rollDice(selectedDice);
  }
});