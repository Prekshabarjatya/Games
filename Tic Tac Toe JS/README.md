# Tic Tac Toe

A browser-based Tic Tac Toe game built with HTML, CSS, and JavaScript. Two players take turns on the same device. The UI is responsive and all logic runs in vanilla JavaScript (no external libraries).

## Demo

Open `index.html` in your browser to play.

## Table of contents
- [Overview](#overview)
- [Gameplay](#gameplay)
- [Project structure](#project-structure)
- [Implementation details](#implementation-details)
- [How to run locally](#how-to-run-locally)
- [Possible improvements](#possible-improvements)
- [Contributing](#contributing)
- [License](#license)

## Overview

This project is a browser-based Tic Tac Toe game created with HTML, CSS, and JavaScript. The game provides an interactive and visually appealing experience for two players taking turns on the same device.

## Gameplay

- Two players alternate turns. Circle (blue) goes first, then Cross (red).
- Click an empty square to place a mark.
- After each move the game checks for a win (rows, columns, diagonals).
- If a player wins, a winning message appears and all other squares become unclickable.
- To play again, refresh the page (there is no explicit restart button).

## Project structure

(Adjust names/paths to match the repository)
- Tic Tac Toe/
  - index.html
  - styles.css
  - script.js
  - README.md

## Implementation details

### HTML structure
- The HTML contains a header with the game title and a brief description.
- The main board element (`#gameboard`) is generated/filled with nine squares (`.square`).
- An information display (`#info`) shows messages like whose turn it is or who has won.

### CSS styling
- The page is centered and designed for a clean, minimal look.
- The game board is laid out as a 3x3 grid (`#gameboard`). Each cell uses the `.square` class — white boxes inside a dark container.
- Marks are visually distinct:
  - Circles: blue-bordered circles.
  - Crosses: red, formed with two intersecting lines (implemented via pseudo-elements).
- The board and marks scale responsively for a polished appearance on different screen sizes.

### JavaScript gameplay logic
- On load, the script creates nine clickable squares.
- Players alternate turns; a state variable tracks the current player and toggles after each valid move.
- When a square is clicked:
  - A circle or cross is rendered in that cell.
  - The square is disabled to prevent further clicks.
  - The info display updates to indicate the next player.
  - The game checks all winning combinations (3 rows, 3 columns, 2 diagonals).
- If a win is detected, the script displays a winning message and disables the remaining squares to end the round.

## How to run locally

1. Clone the repo:
   `git clone https://github.com/Prekshabarjatya/Games.git`
2. Open the Tic Tac Toe folder and open `index.html` in your browser, or serve the folder with a simple static server:
   - Python 3: `python -m http.server 8000`
   - Then open `http://localhost:8000/Tic%20Tac%20Toe/`

## Possible improvements

- Add a Restart / Replay button so users don't need to refresh the page.
- Add a single-player mode with AI (easy / medium / hard).
- Add animations or sound effects for moves and wins.
- Add a scoreboard to track multiple rounds.
- Add unit tests for win/draw detection logic.

## Contributing

Contributions welcome. Open an issue or submit a pull request with improvements or bug fixes.

