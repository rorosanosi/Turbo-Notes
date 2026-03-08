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
const pdfInput = document.getElementById('pdfUpload')

if (generateBtn) {
    generateBtn.addEventListener('click', async() => {
        if (!pdfInput.files[0]) {
            alert("Please select a PDF file first!");
            return;
        }
    
        const formData = new FormData();
        formData.append("file", pdfInput.files[0]);

        generateBtn.value = "AI is thinking..."
        generateBtn.disabled = true;

        try {
            const response = await fetch("https://turbo-notes.onrender.com", {
                method: "POST",
                body: formData
            });

            if (!response.ok) throw new Error("failed to generate cards");

            const data = await response.json();

            localStorage.setItem('activeDeck', JSON.stringify(data.flashcards));

            window.location.href = "flashcards.html";

        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong. Make sure app.py is running!");
            generateBtn.value = "Generate Deck";
            generateBtn.disabled = false;
        }
    });
}

function openDeckPage() {
    window.location.href = "deck.html"; 
}
