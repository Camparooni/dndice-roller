const rollbtn = document.getElementById('rollbtn');
const currentRollInput = document.getElementById('currentRoll');
const previousRollsDiv = document.getElementById('previousRolls');
const diceInputs = document.querySelectorAll('input[type="radio"]'); // Corrected the selector for radio inputs
const diceImage = document.getElementById('diceimage');
let selectedDice = 6; // Default to D6

let previousRolls = [];

function rollDice(selectedDice) {
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
            selectedDice = parseInt(input.value);
            diceImage.src = `./assets/img/d${selectedDice}.png`;
            diceImage.classList.add('visible'); // Show the dice image
            currentRollInput.value = ''; 
        }
    });
});

rollbtn.addEventListener('click', () => {
    if (diceImage.classList.contains('visible')) {
        rollDice(selectedDice);
    }
});
