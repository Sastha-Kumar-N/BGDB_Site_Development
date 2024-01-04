// Genomic sequences for the game
const genomicSequences = ['ATGC', 'CGTA', 'TACG', 'GCAT'];

let shuffledSequences = [];
let flippedCards = [];

document.addEventListener('DOMContentLoaded', () => {
    startGame();
});

function startGame() {
    shuffledSequences = shuffle([...genomicSequences, ...genomicSequences]);
    createCards();
}

function createCards() {
    const gameContainer = document.getElementById('game-container');

    shuffledSequences.forEach((sequence, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.index = index;
        card.textContent = '?';
        card.addEventListener('click', flipCard);

        gameContainer.appendChild(card);
    });
}

function flipCard() {
    const selectedCard = this;
    const index = selectedCard.dataset.index;

    // Prevent flipping the same card twice
    if (flippedCards.length < 2 && !flippedCards.includes(index)) {
        selectedCard.textContent = shuffledSequences[index];
        flippedCards.push(index);

        // Check for a match when two cards are flipped
        if (flippedCards.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }
}

function checkForMatch() {
    const [index1, index2] = flippedCards;
    const card1 = document.querySelector(`.card[data-index="${index1}"]`);
    const card2 = document.querySelector(`.card[data-index="${index2}"]`);

    if (shuffledSequences[index1] === shuffledSequences[index2]) {
        // Matched
        card1.removeEventListener('click', flipCard);
        card2.removeEventListener('click', flipCard);
    } else {
        // Not matched
        card1.textContent = '?';
        card2.textContent = '?';
    }

    flippedCards = [];
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
