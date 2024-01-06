// Amino acid data with image URLs
const aminoAcids = [
    { code: 'Ala', image: 'D:\Site-Development\BGDB_Site_Development\MAIN SITE FILES\tool\Game -dev\images\alanine.png' },
    { code: 'Arg', image: 'D:\Site-Development\BGDB_Site_Development\MAIN SITE FILES\tool\Game -dev\images\alanine.png' },
    { code: 'Asn', image: 'D:\Site-Development\BGDB_Site_Development\MAIN SITE FILES\tool\Game -dev\images\alanine.png' },
    { code: 'Asp', image: 'D:\Site-Development\BGDB_Site_Development\MAIN SITE FILES\tool\Game -dev\images\alanine.png' },
    { code: 'Cys', image: 'D:\Site-Development\BGDB_Site_Development\MAIN SITE FILES\tool\Game -dev\images\alanine.png' },
    { code: 'Glu', image: 'D:\Site-Development\BGDB_Site_Development\MAIN SITE FILES\tool\Game -dev\images\alanine.png' },
    { code: 'Gln', image: 'D:\Site-Development\BGDB_Site_Development\MAIN SITE FILES\tool\Game -dev\images\alanine.png' },
    { code: 'Gly', image: 'D:\Site-Development\BGDB_Site_Development\MAIN SITE FILES\tool\Game -dev\images\alanine.png' },
    { code: 'His', image: 'D:\Site-Development\BGDB_Site_Development\MAIN SITE FILES\tool\Game -dev\images\alanine.png' },
    { code: 'Ile', image: 'D:\Site-Development\BGDB_Site_Development\MAIN SITE FILES\tool\Game -dev\images\alanine.png' },
    { code: 'Leu', image: 'D:\Site-Development\BGDB_Site_Development\MAIN SITE FILES\tool\Game -dev\images\alanine.png' },
    { code: 'Lys', image: 'D:\Site-Development\BGDB_Site_Development\MAIN SITE FILES\tool\Game -dev\images\alanine.png' },
    { code: 'Met', image: 'D:\Site-Development\BGDB_Site_Development\MAIN SITE FILES\tool\Game -dev\images\alanine.png' },
    { code: 'Phe', image: 'D:\Site-Development\BGDB_Site_Development\MAIN SITE FILES\tool\Game -dev\images\alanine.png' },
    { code: 'Pro', image: 'D:\Site-Development\BGDB_Site_Development\MAIN SITE FILES\tool\Game -dev\images\alanine.png' },
    { code: 'Ser', image: 'D:\Site-Development\BGDB_Site_Development\MAIN SITE FILES\tool\Game -dev\images\alanine.png' },
    { code: 'Thr', image: 'D:\Site-Development\BGDB_Site_Development\MAIN SITE FILES\tool\Game -dev\images\alanine.png' },
    { code: 'Trp', image: 'D:\Site-Development\BGDB_Site_Development\MAIN SITE FILES\tool\Game -dev\images\alanine.png' },
    { code: 'Tyr', image: 'D:\Site-Development\BGDB_Site_Development\MAIN SITE FILES\tool\Game -dev\images\alanine.png' },
    { code: 'Val', image: 'D:\Site-Development\BGDB_Site_Development\MAIN SITE FILES\tool\Game -dev\images\alanine.png' },
];

// Shuffled amino acids
let shuffledAminoAcids = [];
let flippedCards = [];

document.addEventListener('DOMContentLoaded', () => {
    startGame();
});

function startGame() {
    // Shuffle the full amino acids array
    shuffledAminoAcids = shuffle([...aminoAcids]);

    // Take the first 10 elements to form a subset
    const subsetAminoAcids = shuffledAminoAcids.slice(0, 5);

    // Duplicate the subset to have pairs
    shuffledAminoAcids = shuffle([...subsetAminoAcids, ...subsetAminoAcids]);

    // Create and display the cards
    createCards();
}

function createCards() {
    const gameContainer = document.getElementById('game-container');

    shuffledAminoAcids.forEach((acid, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.index = index;

        // Create an image element for each card
        const image = document.createElement('img');
        image.src = 'D:\Site-Development\BGDB_Site_Development\MAIN SITE FILES\tool\Game -dev\images\alanine.png'; // Set a default hidden image URL
        card.appendChild(image);

        card.addEventListener('click', flipCard);
        gameContainer.appendChild(card);
    });
}

function flipCard() {
    const selectedCard = this;
    const index = selectedCard.dataset.index;

    // Prevent flipping the same card twice
    if (flippedCards.length < 2 && !flippedCards.includes(index)) {
        // Display the actual image on flip
        const imageUrl = shuffledAminoAcids[index].image;
        selectedCard.firstChild.src = imageUrl;

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

    if (shuffledAminoAcids[index1].code === shuffledAminoAcids[index2].code) {
        // Matched
        card1.removeEventListener('click', flipCard);
        card2.removeEventListener('click', flipCard);

        // Display the matched amino acid image in a modal
        setTimeout(() => {
            displayModal(shuffledAminoAcids[index1].image);
        }, 500);
    } else {
        // Not matched
        card1.firstChild.src = 'D:\Site-Development\BGDB_Site_Development\MAIN SITE FILES\tool\Game -dev\images\alanine.png';
        card2.firstChild.src = 'D:\Site-Development\BGDB_Site_Development\MAIN SITE FILES\tool\Game -dev\images\alanine.png';
    }

    flippedCards = [];
}

function displayModal(imageUrl) {
    const modalContainer = document.getElementById('modal-container');
    const modalContent = document.getElementById('modal-content-img');

    // Display the matched amino acid image in the modal
    modalContent.src = imageUrl;

    modalContainer.style.display = 'block';
}

function closeModal() {
    const modalContainer = document.getElementById('modal-container');
    modalContainer.style.display = 'none';
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
