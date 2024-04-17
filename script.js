document.addEventListener('DOMContentLoaded', function () {
    const reel = document.querySelector('.reel');
    const symbols = ['🍒', '🍋', '🍇', '🍊', '🔔', '💎', '🍉'];
    const spinButton = document.querySelector('.spin-button');

    spinButton.addEventListener('click', spinReel);

    function spinReel() {
        reel.innerHTML = '';
        for (let i = 0; i < 3; i++) {
            const randomIndex = Math.floor(Math.random() * symbols.length);
            const symbol = symbols[randomIndex];
            const symbolElement = document.createElement('div');
            symbolElement.classList.add('symbol');
            symbolElement.textContent = symbol;
            reel.appendChild(symbolElement);
        }
        checkWin();
    }

    function checkWin() {
        const symbolsArray = Array.from(reel.children).map(symbol => symbol.textContent);
        const uniqueSymbols = new Set(symbolsArray);
        if (uniqueSymbols.size === 1) {
            alert('¡Has ganado!');
        }
    }
});
