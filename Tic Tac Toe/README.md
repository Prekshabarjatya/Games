This project is a browser-based Tic Tac Toe game created with HTML, CSS, and JavaScript. The game provides an interactive and visually appealing experience for two players taking turns on the same device.

HTML Structure
The HTML sets up a header with the game’s title, a brief description, and an empty game board (#gameboard).

It also includes an information display (#info) to show messages such as whose turn it is or who has won.

CSS Styling
The page is styled to be centered and visually clean.

The game board is a 3x3 grid (#gameboard), with each cell styled as a .square—white, bordered boxes inside a black container.

Marks are visually distinct:

Circles are blue-bordered circles.

Crosses are red, with two intersecting lines achieved through pseudo-elements.

The board and marks scale responsively for a polished look.

JavaScript Gameplay Logic
The JavaScript dynamically creates nine clickable squares at game start.

Players alternate turns: the circle (blue) goes first, then the cross (red), toggling each move.

When a cell is clicked:

A circle or cross is rendered in that cell.

The square disables further clicks.

The display updates to indicate the next turn.

The game checks for a win after each move.

Winning Logic: After each move, the script checks all possible winning combinations (rows, columns, diagonals) to see if any player has lined up three marks.

If a player wins, a winning message appears and all other cells become unclickable, effectively ending the round.

Additional Features
The design is intuitive, providing clear feedback and enforcing the rules of Tic Tac Toe.

The game can be replayed by refreshing the page (no explicit restart button present).

All UI and functional logic is handled without any external libraries.
