// UI - createnew.html 
const createDeckBtn = document.getElementById('createNewDeck');
const generatorSection = document.getElementById('generatorSection');
const activeDeckTitle = document.getElementById('activeDeckTitle');

createDeckBtn.addEventListener('click',()=>{
    const deckName = prompt("What would you like to name this deck?");

    if (deckName) {
        addDeckToUI(deckName);
    }
});

// UI - flashcards.html
const car = document.getElementById('car-container');
const cardText = car.querySelector('.card-text');

let deck = JSON.parse(localStorage.getItem('activeDeck')) || [];
let currentIndex = 0;
let isFlipped = false;

if (deck.length > 0) {
    showCard();
} else {
    cardText.innerText = "No deck found. Go back and create one!";
}

function showCard() {
    isFlipped = false;
    cardText.innerText = deck[currentIndex].front;
    car.classList.remove('exit');
    car.classList.add('enter');
}

document.addEventListener('keydown', (event)=> {
    if (event.key === "ArrowRight" && deck.length > 0) {
        car.classList.remove('enter');
        car.classList.add('exit');

        setTimeout(() => {
            currentIndex = (currentIndex +1) % deck.length;
            showCard();
        }, 600);
    }

    if (event.key === " "){
        isFlipped = !isFlipped;
        cardText.innerText = isFlipped ? deck[currentIndex].back : deck[currentIndex].front;
    }
});

// API for flashcard generation
const generateBtn = document.getElementById('generateBtn');
const notesInput = document.getElementById('notes');
const cardGrid = document.getElementById('cardGrid');

const API_URL = "http://127.0.0.1:8000/generate";
