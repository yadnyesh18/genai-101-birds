const factDisplay = document.getElementById('factDisplay');
const generateFactBtn = document.getElementById('generateFact');

const birdFacts = [
    "The bird with the most feathers is the Whistling Swan, with more than 25,000 feathers.",
    "Ducks sleep with one eye open and half of their brain active.",
    "The smallest bird egg belongs to the hummingbird and is about the size of a jelly bean.",
    "Pigeons can recognize human faces.",
    "A group of owls is called a parliament."
    // Add more facts here
];

function generateRandomFact() {
  const randomIndex = Math.floor(Math.random() * birdFacts.length);
  factDisplay.textContent = birdFacts[randomIndex];
}

generateFactBtn.addEventListener('click', generateRandomFact);
