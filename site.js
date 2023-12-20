const wordContainer = document.getElementById('word-container');

function addCenterText() {
    const centerText = document.createElement('div');
    centerText.id = 'center-text';
    centerText.textContent = 'я тебя люблю';
    centerText.style.color = `rgba(255, 255, 255, 1)`;
    wordContainer.appendChild(centerText);

    // Задержка перед появлением текста "я тебя люблю"
    setTimeout(() => {
        centerText.style.opacity = 1;
    }, 1000); // Пример: задержка 1000 мс (1 секунда)
}

function createRandomWords() {
    for (let i = 0; i < 5; i++) {
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

            word.style.opacity = 1;

            // Бесконечное появление и пропадание текста "прости"
            setInterval(() => {
                word.style.opacity = 0; // Пропадание текста
                setTimeout(() => {
                    word.style.left = `${Math.random() * (window.innerWidth - 100)}px`;
                    word.style.top = `${Math.random() * (window.innerHeight - 30)}px`;
                    word.style.opacity = 1; // Появление текста
                }, 1000); // Задержка перед появлением
            }, 2000); // Задержка между появлением и пропаданием
        }, i * 400); // Увеличивающаяся задержка между словами
    }
}

function generateWords() {
    addCenterText();
    createRandomWords();
}

generateWords();
