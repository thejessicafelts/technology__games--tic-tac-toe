### README.md

# Tic Tac Toe Game

## Description

This project is a simple implementation of the classic Tic Tac Toe game using HTML, CSS, and JavaScript. The game features a 3x3 grid where two players, X and O, take turns to mark the cells. The objective is to get three of your marks in a horizontal, vertical, or diagonal row. The game detects winning conditions and announces the winner or declares a draw if all cells are filled without a winner. Players can restart the game at any time by clicking the "Restart Game" button.

A sidebar displays the scores for each game session, showing the results of each game. The scores can be cleared using the "Clear Scores" button.

## How to Play

1. Open the `index.html` file in a web browser.
2. Click on any cell in the 3x3 grid to place your mark (X or O).
3. Players take turns until one player gets three marks in a row (horizontal, vertical, or diagonal) or all cells are filled (resulting in a draw).
4. When a player wins or a draw occurs, an alert will be displayed, and the game will reset for a new round.
5. To manually restart the game, click the "Restart Game" button.
6. The sidebar shows the results of each game. The most recent game score is displayed at the top of the scores list.
7. To clear all scores, click the "Clear Scores" button located below the sidebar.

## Project Structure

- `index.html`: Contains the HTML structure of the game.
- `style.css`: Contains the CSS for styling the game board, sidebar, and buttons.
- `script.js`: Contains the JavaScript logic for handling game functionality, including player moves, checking for winners, updating scores, and resetting the game.

## Updates

- Added a sidebar to display the scores for each game session.
- Added a "Clear Scores" button below the sidebar to allow users to clear the game scores.
- Ensured that the title, game board, and reset button are centered on the screen.
- Ensured the sidebar and "Clear Scores" button are positioned to the side, without affecting the centering of the main game elements.