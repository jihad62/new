let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;

const cells = document.querySelectorAll(".cell");
const result = document.getElementById("result");

cells.forEach((cell, index) => {
    cell.addEventListener("click", () => makeMove(index));
});

function makeMove(index) {
    if (gameBoard[index] === "" && !gameOver) {
        gameBoard[index] = currentPlayer;
        cells[index].textContent = currentPlayer;
        if (checkWinner()) {
            result.textContent = `${currentPlayer} wins!`;
            gameOver = true;
        } else if (gameBoard.every(cell => cell !== "")) {
            result.textContent = "It's a draw!";
            gameOver = true;
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return gameBoard[a] !== "" && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c];
    });
}

function resetGame() {
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    gameOver = false;
    currentPlayer = "X";
    cells.forEach(cell => cell.textContent = "");
    result.textContent = "";
}
