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

            word.style.opacity = 1;

            const speed = 0.2 + parseFloat(word.style.fontSize.replace('px', '')) / 100; // Уменьшенная скорость, зависящая от размера

            function moveWord() {
                const topPosition = parseFloat(word.style.top.replace('px', ''));
                word.style.top = `${topPosition + speed}px`;

                if (topPosition < window.innerHeight) {
                    requestAnimationFrame(moveWord);
                } else {
                    wordContainer.removeChild(word);
                }
            }

            moveWord();
        }, i * 400); // Увеличивающаяся задержка между словами
    }
}

function addCenterText() {
    const centerText = document.createElement('div');
    centerText.textContent = 'я тебя люблю';
    centerText.style.fontSize = '24px';
    centerText.style.position = 'absolute';
    centerText.style.top = '50%';
    centerText.style.left = '50%';
    centerText.style.transform = 'translate(-50%, -50%)';
    centerText.style.color = 'white';
    centerText.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.8)'; // Добавляем тень
    wordContainer.appendChild(centerText);
}

function generateWords() {
    addCenterText();
    setInterval(createRandomWords, 6000); // Общая задержка между сериями слов
}

generateWords();
