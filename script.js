document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const cells = document.querySelectorAll('.cell');
    const restartButton = document.getElementById('restart');
    let currentPlayer = 'X';
    let boardState = ['', '', '', '', '', '', '', '', ''];

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

    const handleClick = (e) => {
        const index = e.target.getAttribute('data-index');
        if (boardState[index] === '' && !checkWinner()) {
            boardState[index] = currentPlayer;
            e.target.textContent = currentPlayer;
            if (checkWinner()) {
                setTimeout(() => {
                    alert(`${currentPlayer} wins!`);
                    restartGame();
                }, 100);
            } else if (boardState.every(cell => cell !== '')) {
                setTimeout(() => {
                    alert('Draw!');
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

    const restartGame = () => {
        boardState = ['', '', '', '', '', '', '', '', ''];
        currentPlayer = 'X';
        cells.forEach(cell => {
            cell.textContent = '';
        });
    };

    cells.forEach(cell => {
        cell.addEventListener('click', handleClick);
    });

    restartButton.addEventListener('click', restartGame);
});
