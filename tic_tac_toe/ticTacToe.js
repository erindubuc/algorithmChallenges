const readline = require('readline-sync');



let positions = ["","","","","","","","",""];
let turn = 1;
// const winningPositions = [
// 	[0,1,2],
// 	[3,4,5],
// 	[6,7,8],
// 	[0,4,8],
// 	[2,4,6],
// 	[0,3,6],
// 	[1,4,7],
// 	[2,5,8]
// 	];

// Arrays to hold player moves
// When player makes a move, their position number will get pushed to their array
// Later, these arrays can be compared with the winningPositions arrays to find a winner
let playerX = [];
let playerO = [];
// let position;
const allBlank = "      " + "|" + "       " + "|" + "      ";
let positionRowTop = "  " + positions[0] + "  " + "  | " + "  " + positions[1] + "  " + "  | " + "  " + positions[2] + " ";
let positionRowMid = "  " + positions[3] + "  " + "  | " + "  " + positions[4] + "  " + "  | " + "  " + positions[5] + " ";
let positionRowBottom = "  " + positions[6] + "  " + "  | " + "  " + positions[7] + "  " + "  | " + "  " + positions[8] + " ";
const horizRow = "- - -" + " + " + "- - -" + " + " + "- - -";

function drawBoard () {
	console.log(allBlank);
	console.log(positionRowTop);
	console.log(allBlank);
	console.log(horizRow);
	
	console.log(allBlank);
	console.log(positionRowMid);
	console.log(allBlank);
	console.log(horizRow);
	
	console.log(allBlank);
	console.log(positionRowBottom);
	console.log(allBlank);
	
}

// board will be created with positions filled in with moves
function importBoard(string) {
	drawBoard();
	// Add played positions to empty positions array
	for (let i = 0; i < positions.length; i++) {
		 positions[i] = string[i];
	}
		console.log(positions);
	
	// to push moves to player arrays
	for (let j = 0; j < positions.length; j++) {	
		
		if (positions[j] == "X" || positions[j] == "x")
			playerX.push(j);
		else if (positions[j] == "O" || positions[j] == "o")
			playerO.push(j);
	}

	console.log("Player X: ",playerX);
	console.log("Player O: ",playerO);
}
// drawBoard();

// Determine if a "move" is valid before adding player input to the board
function isValidMove(move) {
	let answer;
	// Move needs to be between 0-8
	if (move >= 0 && move <=8)
		// If move is empty - it's valid, if it's not, then false
		answer = (positions[move] == "") ? true : false;
		
	else if (move < 0 || move > 8) {
		console.log("You can only choose a position from 0-8.");
		answer = false;
	} else {
		answer = false;
	}
	return answer;
}

// Check the state of the board and determine if the game is over (not by winning for the moment)
function isDraw() {
	
	// If length is 9 or greater, there are no more moves to be made = DRAW
	if (playerX.length + playerO.length > 8)
		return true;
	else
		return false;
}

// isDraw();
//console.log("Is there a draw?", isDraw());

// Determine if there are any winning combinations
function didWin() {
	// let position;
	// positions[position] = position;
	let winner;
	// Winners
	if (positions[0] == positions[1] && positions[0] == positions[2] && positions[0] != '') { 
		winner = (positions[0] == 'X') ? console.log("X is the winner!") : console.log("O is the winner!");
		return true;
	} else if (positions[3] == positions[4] && positions[3] == positions[5] && positions[3] != ''){ 
		winner = (positions[0] == 'X') ? console.log("X is the winner!") : console.log("O is the winner!");
		return true;
	
	} else if (positions[6] == positions[7] && positions[6] == positions[8] && positions[6] != '') { 
		winner = (positions[0] == 'X') ? console.log("X is the winner!") : console.log("O is the winner!");
		return true;
	
	} else if (positions[0] == positions[4] && positions[0] == positions[8] && positions[0] != '') { 
		winner = (positions[0] == 'X') ? console.log("X is the winner!") : console.log("O is the winner!");
		return true;
	
	} else if (positions[2] == positions[4] && positions[2] == positions[6] && positions[2] != '') { 
		winner = (positions[0] == 'X') ? console.log("X is the winner!") : console.log("O is the winner!");
		return true;
	
	} else if (positions[0] == positions[3] && positions[0] == positions[6] && positions[0] != '') { 
		winner = (positions[0] == 'X') ? console.log("X is the winner!") : console.log("O is the winner!");
		return true;
	
	} else if (positions[1] == positions[4] && positions[1] == positions[7] && positions[1] != '') { 
		winner = (positions[0] == 'X') ? console.log("X is the winner!") : console.log("O is the winner!");
		return true;

	} else if (positions[2] == positions[5] && positions[2] == positions[8] && positions[2] != '') { 
		winner = (positions[0] == 'X') ? console.log("X is the winner!") : console.log("O is the winner!");
		return true;

		
	// Not winner
	} else
		return false;
}
//didWin();
//console.log("Has the game been won? ", didWin());

// Function to handle accepting and applying a move
function applyMove(move) {
	
	let letter = (turn % 2 != 0) ? "X" : "O";
	positions[move] = letter;
	
	//if (player == 1) {
	if (letter == 'X') {
		playerX.push(move);
		positions.splice(move, 1, letter);
		console.log(positions[move]);
		console.log("Player 1: ",playerX);
		console.log(positions);
	} else {
		playerO.push(move);
		// positions.splice(positions[move], 1, letter);
		positions.splice(move, 1, letter);
		// positions.push(letter);
		console.log(positions[move]);
		console.log("Player 2: ",playerO);
		console.log(positions);
	} 
	return true;
}

// Reset board after a win or draw
function resetBoard() {
	for (let i = 0; i < positions.length; i++)
		positions[i] = "";
}

// Reset player arrays after win or draw
function resetPlayers() {
		playerX = [];
		playerO = [];
}


// Check for win and draw throughout play
function isGameOver() {
	if (didWin()) {
		console.log("Yay! We have a winner! Game over.");
		resetBoard();
		resetPlayers();
		drawBoard();
		return true;
	}
	// if valid - check for a draw
	else if (isDraw()) {
		console.log("This game has a draw! No one wins.");
		resetBoard();
		resetPlayers();
		drawBoard();
		return true;
	}
	return false;
	
}
// applyMove(2, 2);

// Process a move - in charge of the flow of the "process to move"
function processMove(move) {
	// check to see if move is valid
	if(!isValidMove(move)) {
		console.log("This is not a valid move. Try again.");
		return false;
	} else {
		applyMove(move);
		isGameOver();
		return true;
	}
		
}



// // Import hard-coded positions into board
// let boardPositions = ["X", "O", "", "X", "", "O", "X", "", "O"];
// importBoard(boardPositions);

// processMove(2, 1);
// processMove(2, 2);
// // console.log("Processing move");
// console.log(positions);
// console.log("player1: ", player1);
// console.log("player2: ", player2);



// testing
let boardPositions = ["","","","","","","","",""];
// importBoard(boardPositions);

function xWins() {
	processMove(0,1);
	processMove(4,2);
	processMove(1,1);
	// processMove(4,2);
	processMove(7,2);
	processMove(2,1);
	console.log("player1: ", playerX);
	console.log("player2: ", playerO);
}
// xWins();

function oWins() {
	processMove(4,1);
	processMove(7,2);
	processMove(1,1);
	processMove(8,2);
	processMove(2,1);
	processMove(6,2);
	console.log("player1: ", playerX);
	console.log("player2: ", playerO);
}
//oWins();

function draw() {
	processMove(7,1);
	processMove(8,2);
	processMove(4,1);
	processMove(1,2);
	processMove(2,1);
	processMove(6,2);
	processMove(0,1);
	processMove(3,2);
	processMove(5,1);
	console.log("player1: ", playerX);
	console.log("player2: ", playerO);
}
// draw();

// the game loop the game should ask the user for input. The current goal is 
// simply to accept the input and validate that it's something your application can use.
function playerInput() {
	console.log("Welcome to Tic-Tac-Toe!"); 
	console.log("Player 1 will be X.  Player 2 will be O.");
	console.log("Player 1, you will go first.");
	console.log("Enter a position number 0-8, or 'Q' at any time to quit.");
	console.log("********************************************************");
	
	do {
		var prompt = (turn % 2 != 0) ? "Player 1, where would you like to move? " : 
			"Player 2, where would you like to move? ";
		var move = readline.question(prompt);
		
		if(!isValidMove(move)) {
			console.log("This is an invalid move.  Please choose a number between 0-8.");
			continue;
		} else {
			processMove(move);
			turn++;
			console.log("turn count: ", turn);
			
			if(isGameOver())
				break;
		} 
		
		
	} while (move != 'q' || move != 'Q' && !isGameOver());
	
}
playerInput();