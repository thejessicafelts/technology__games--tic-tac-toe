Sure, here's an updated `README.md` file to reflect the latest changes and the current state of the game:

### README.md

# Tic Tac Toe Game

## Description

This project is a simple implementation of the classic Tic Tac Toe game using HTML, CSS, and JavaScript. The game features a 3x3 grid where two players, X and O, take turns to mark the cells. The objective is to get three of your marks in a horizontal, vertical, or diagonal row. The game detects winning conditions and announces the winner or declares a draw if all cells are filled without a winner. Players can restart the game at any time by clicking the "Restart Game" button.

A sidebar displays the scores for each game session, showing the results of each game. The scores can be cleared using the "Clear Scores" button. Additionally, a modal with instructions on how to play the game is displayed whenever the page is loaded or refreshed, and can be opened by clicking the "How to Play" button.

## How to Play

1. Open the `index.html` file in a web browser.
2. A modal with instructions on how to play will be displayed automatically. Read the instructions and close the modal by clicking the close button (`×`) or clicking outside the modal.
3. Click on any cell in the 3x3 grid to place your mark (X or O).
4. Players take turns until one player gets three marks in a row (horizontal, vertical, or diagonal) or all cells are filled (resulting in a draw).
5. When a player wins or a draw occurs, an alert will be displayed, and the game will reset for a new round.
6. To manually restart the game, click the "Restart Game" button.
7. The sidebar shows the results of each game. The most recent game score is displayed at the top of the scores list.
8. To clear all scores, click the "Clear Scores" button located below the sidebar.
9. To view the instructions again, click the "How to Play" button below the title.

## Project Structure

- `index.html`: Contains the HTML structure of the game.
- `style.css`: Contains the CSS for styling the game board, sidebar, modal, and buttons.
- `script.js`: Contains the JavaScript logic for handling game functionality, including player moves, checking for winners, updating scores, resetting the game, and displaying the modal.

## Updates

- Added a sidebar to display the scores for each game session.
- Added a "Clear Scores" button below the sidebar to allow users to clear the game scores.
- Ensured that the title, game board, and restart button are centered on the screen.
- Ensured the sidebar and "Clear Scores" button are positioned to the side, without affecting the centering of the main game elements.
- Added a modal with instructions on how to play, which displays on page load or refresh.
- Changed the "Restart" button text to "Restart Game".
- Updated the sidebar width to 320px.

## Future Enhancements

- Implementing a single-player mode with AI.
- Adding animations for cell marking and game win/draw notifications.
- Enhancing the UI/UX with more polished styling and effects.

Feel free to contribute to this project by forking the repository and submitting pull requests with your enhancements. Enjoy playing Tic Tac Toe!