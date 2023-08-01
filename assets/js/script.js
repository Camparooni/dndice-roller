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

async function rollDice(selectedDice) {
  const min = 1;
  const max = selectedDice;

  const diceNumber = await getRandomNumber(min, max);

  currentRollInput.value = diceNumber;

  previousRolls.push(diceNumber);

  if (previousRolls.length > 10) {
    previousRolls.shift();
  }

  previousRollsDiv.innerHTML = previousRolls;
}

const rollbtn = document.getElementById('rollbtn');
const currentRollInput = document.getElementById('currentRoll');
const previousRollsDiv = document.getElementById('previousRolls');
const diceInputs = document.querySelectorAll('input[type="radio"]'); // Corrected the selector for radio inputs
const diceImage = document.getElementById('diceimage');
let selectedDice = 6; // Default to D6

let previousRolls = [];

function rollDice() {
  const diceNumber = Math.floor(Math.random() * selectedDice) + 1;

  currentRollInput.value = diceNumber;

  previousRolls.push(diceNumber);

  if (previousRolls.length > 10) {
    previousRolls.shift();
  }

  // Set the content of previousRollsDiv here
  previousRollsDiv.innerHTML = "" + previousRolls.join(', ');

  // Check for critical rolls
  if (diceNumber === 1) {
    openModal("specialRollModal");
    document.getElementById("specialRollModal").innerHTML = "<div class='modal-content'>" +
      "<span class='close-btn' onclick='closeModal()'>&times;</span>" +
      "<h2>Critical Miss!</h2>" +
      "<p>Oops! It's a Critical Miss!</p>" +
      "</div>";
  } else if (diceNumber === 20) {
    openModal("specialRollModal");
    document.getElementById("specialRollModal").innerHTML = "<div class='modal-content'>" +
      "<span class='close-btn' onclick='closeModal()'>&times;</span>" +
      "<h2>Critical Hit!</h2>" +
      "<p>Sweet! It's a Critical Hit!</p>" +
      "</div>";
  }
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "block";
}

function closeModal() {
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => (modal.style.display = "none"));
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