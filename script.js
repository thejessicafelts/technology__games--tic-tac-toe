document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const cells = document.querySelectorAll('.cell');
    const restartButton = document.getElementById('restart');
    const clearScoresButton = document.getElementById('clear-scores');
    const scoresContainer = document.getElementById('scores');
    const howToPlayButton = document.getElementById('how-to-play');
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close-button');
    let currentPlayer = 'X';
    let boardState = ['', '', '', '', '', '', '', '', ''];
    let gameCount = 0;

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    // Display the modal on page load or refresh
    modal.style.display = 'flex';

    const handleClick = (e) => {
        const index = e.target.getAttribute('data-index');
        if (boardState[index] === '' && !checkWinner()) {
            boardState[index] = currentPlayer;
            e.target.textContent = currentPlayer;
            if (checkWinner()) {
                setTimeout(() => {
                    alert(`${currentPlayer} wins!`);
                    updateScores(`${currentPlayer} Wins!`);
                    restartGame();
                }, 100);
            } else if (boardState.every(cell => cell !== '')) {
                setTimeout(() => {
                    alert('Draw!');
                    updateScores('Draw!');
                    restartGame();
                }, 100);
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    };

    const checkWinner = () => {
        return winningCombinations.some(combination => {
            return combination.every(index => {
                return boardState[index] === currentPlayer;
            });
        });
    };

    const updateScores = (result) => {
        gameCount++;
        const scoreItem = document.createElement('div');
        scoreItem.textContent = `Game ${gameCount}: ${result}`;
        scoresContainer.prepend(scoreItem);
    };

    const restartGame = () => {
        boardState = ['', '', '', '', '', '', '', '', ''];
        currentPlayer = 'X';
        cells.forEach(cell => {
            cell.textContent = '';
        });
    };

    const clearScores = () => {
        scoresContainer.innerHTML = '';
        gameCount = 0;
    };

    const openModal = () => {
        modal.style.display = 'flex';
    };

    const closeModal = () => {
        modal.style.display = 'none';
    };

    cells.forEach(cell => {
        cell.addEventListener('click', handleClick);
    });

    restartButton.addEventListener('click', restartGame);
    clearScoresButton.addEventListener('click', clearScores);
    howToPlayButton.addEventListener('click', openModal);
    closeButton.addEventListener('click', closeModal);

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
});
