const gameBoard = document.querySelector("#gameboard")
const infoDisplay = document.querySelector("#info")

const startCells = [
    "", "", "", 
    "", "", "", 
    "", "", "",
]

let go ="circle";

infoDisplay.textContent = "Circle goes first";

function createBoard(){
    startCells.forEach((_cell,idx) => {
        const cellElement = document.createElement("div");
        cellElement.id = idx;
        cellElement.classList.add("square");
        cellElement.addEventListener("click", addGo)
        gameBoard.append(cellElement);
    })
}

function addGo(e){
    const goDisplay = document.createElement("div");
    goDisplay.classList.add(go);
    go = go == "circle" ? "cross" : "circle";
    infoDisplay.textContent = "It is now " + go +"'s turn";
    e.target.append(goDisplay);
    e.target.removeEventListener("click", addGo)
    checkScore()
}

function checkScore(){
    const allSqaures = document.querySelectorAll(".square");
    const winningCombos = [
        [0,1,2], 
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    winningCombos.forEach(array => {
        const circleWins = array.every(cell => allSqaures[cell].firstChild?.classList.contains("circle"));

    if (circleWins){
        infoDisplay.textContent = "Circle Wins!";
        allSqaures.forEach(sqaure => sqaure.replaceWith(sqaure.cloneNode(true)))
    }
    const crossWins = array.every(cell => allSqaures[cell].firstChild?.classList.contains("cross"));

    if (crossWins){
        infoDisplay.textContent = "Cross Wins!";
        allSqaures.forEach((sqaure) =>
          sqaure.replaceWith(sqaure.cloneNode(true))
        );
    }

})};

createBoard();