//board element
let board = document.getElementById('board');
//cells array
let cells = Array.from(board.children)
//an array which stores the moves of x and o
// easier than checking for classes i think
let moves = []




// fresh board/first move/variable declarations
//movesCounter counter. increments with clicks
    let movesCounter = 0
    let playerMove = "x"
    board.classList.add("x")

//click listener
board.addEventListener('click', function(event){
    cells.forEach(function(element, i) {
        if (element === event.target) {
           move(i)
        }
     });
  });

//this is what happens when the click fires
//event returns the "cell" parameter, an index
function move(cell) {
    //checks to make sure the cell is unmarked
    if (unmarked(cell)) {
        //marks the cell via css class
        cells[cell].classList.add(playerMove);
    }
    
    movesCounter++ // increments move

    moves[cell] = playerMove //adds move to the playerMoves array
    
    checkForWinner() // runs function to match winner
    
    if (movesCounter === 9) {
        gameOver()
    }
    
    //removes old shadow mark
    board.classList.remove(playerMove)
    // swaps to next playerMove 
    if (playerMove === "x") {
        playerMove = "o"
    } else (playerMove = "x")
    //adds new shadow mark
    board.classList.add(playerMove)


}
 

function checkForWinner() {
    if (movesCounter > 4) {
        if (
            //horizontal rows
            (moves[0] === moves[1] && moves[0] === moves[2] && moves[0] != null) ||
            (moves[3] === moves[4] && moves[3] === moves[5] && moves[3] != null) ||
            (moves[6] === moves[7] && moves[6] === moves[8] && moves[6] != null) ||
            //vertical rows
            (moves[0] === moves[3] && moves[0] === moves[6] && moves[0] != null) ||
            (moves[1] === moves[4] && moves[1] === moves[7] && moves[1] != null) ||
            (moves[2] === moves[5] && moves[2] === moves[8] && moves[2] != null) ||
            //diagonals
            (moves[0] === moves[4] && moves[0] === moves[8] && moves[0] != null) ||
            (moves[2] === moves[4] && moves[2] === moves[6] && moves[2] != null)
            ) {
                gameOver(playerMove)
            }
        }
}

function gameOver(winner) {
    //.winning-message display:flex
    // other shit
    if (typeof winner === "undefined") {
        //draw 
        console.log("no winner")
    }
    else {
        //congrats x/o you won
        console.log(winner + " wins!")
    }
    console.log("refresh page to restart")
}


function unmarked(cell) {
    if (
        !cells[cell].classList.contains("x") &&
        !cells[cell].classList.contains("o") ) {
            return true
        } else {
            return false
    }
}

function newGame() {
    // reset the board and so on/
}