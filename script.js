// UI 
const createDeckBtn = document.getElementById('createNewDeck');
const generatorSection = document.getElementById('generatorSection');
const activeDeckTitle = document.getElementById('activeDeckTitle');

createDeckBtn.addEventListener('click',()=>{
    const deckName = prompt("What would you like to name this deck?");

    if (deckName) {
        addDeckToUI(deckName);
    }
});



// API for flashcard generation
const generateBtn = document.getElementById('generateBtn');
const notesInput = document.getElementById('notes');
const cardGrid = document.getElementById('cardGrid');

const API_URL = "http://127.0.0.1:8000/generate";
