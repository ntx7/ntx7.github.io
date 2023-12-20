const wordContainer = document.getElementById('word-container');

function createRandomWords() {
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const word = document.createElement('div');
            word.textContent = 'прости';
            word.className = 'word';
            word.style.fontSize = `${Math.floor(Math.random() * 30) + 10}px`;
            word.style.left = `${Math.random() * (window.innerWidth - 100)}px`;
            word.style.top = `${Math.random() * (window.innerHeight - 30)}px`;

            // Calculate darkness based on font size
            const darkness = parseFloat(word.style.fontSize.replace('px', '')) / 40;
            word.style.color = `rgba(255, 255, 255, ${darkness})`;

            wordContainer.appendChild(word);

            // Force reflow before adding class for transition
            word.offsetHeight;
        }, i * 400); // Увеличивающаяся задержка между словами
    }
}

function addCenterText() {
    const centerText = document.createElement('div');
    centerText.id = 'center-text';
    centerText.textContent = 'я тебя люблю';
    wordContainer.appendChild(centerText);
}

function generateWords() {
    addCenterText();
    createRandomWords();
}

generateWords();
