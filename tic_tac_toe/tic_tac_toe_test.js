let positions = ["","","","","","","","", ""];

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
let player1 = [];
let player2 = [];
// let empty = [];
let position;
const allBlank = "      " + "|" + "       " + "|" + "      ";
let positionRowTop = "  " + positions[0] + "  " + "  | " + "  " + positions[1] + "  " + "  | " + "  " + positions[2] + " ";
let positionRowMid = "  " + positions[3] + "  " + "  | " + "  " + positions[4] + "  " + "  | " + "  " + positions[5] + " ";
let positionRowBottom = "  " + positions[6] + "  " + "  | " + "  " + positions[7] + "  " + "  | " + "  " + positions[8] + " ";
const horizRow = "- - -" + " + " + "- - -" + " + " + "- - -";

const drawBoard = () => {
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
	
};

// board will be created with positions filled in with moves
const importBoard = (string) => {
	drawBoard();
	// Add played positions to empty positions array
	for (let i = 0; i < positions.length; i++) {
		 positions[i] = string[i];
	}
		console.log(positions);
	
	// to push moves to player arrays
	// if move is x push to player1 array
	for (let j = 0; j < positions.length; j++) {	
		
		if (positions[j] == "X" || positions[j] == "x")
			player1.push(j);
		else if (positions[j] == "O" || positions[j] == "o")
			player2.push(j);
		// else
		// 	empty.push(j);
	}

	console.log("Player 1: ",player1);
	console.log("Player 2: ",player2);
	// console.log("Empty: ", empty);
};
// drawBoard();

// Import hard-coded positions into board
let boardPositions = ["X", "O", "", "X", "", "O", "X", "", "O"];
importBoard(boardPositions);

// Determine if a "move" is valid before adding player input to the board
const isValidMove = (move) => {
	let answer;
	// Move needs to be between 0-8
	if (move >= 0 && move <=8) {
		// If move is empty - it's valid, if it's not, then false
		answer = (positions[move] == "") ? true : false;
		// return answer;
		// console.log("Is this move valid?", answer);
	} else if (move < 0 || move > 8) {
		console.log("You can only choose a position from 0-8.");
		answer = false;
		// return false;
	} else {
		answer = false;
		// return false;
	}
	return answer;
};

// Check the state of the board and determine if the game is over (not by winning for the moment)
const isDraw = () => {
	
	// If length is 9 or greater, there are no more moves to be made = DRAW
	if (player1.length + player2.length > 8)
		return true;
	else
		return false;
};

// isDraw();
//console.log("Is there a draw?", isDraw());

// Determine if there are any winning combinations
const didWin = () => {
	// Winners
	if (positions[0] == positions[1] && positions[0] == positions[2] || 
	positions[3] == positions[4] && positions[3] == positions[5])
		return true;

	if (positions[6] == positions[7] && positions[6] == positions[8] ||
	positions[0] == positions[4] && positions[0] == positions[8])
		return true;
	
	if (positions[2] == positions[4] && positions[2] == positions[6] ||
	positions[0] == positions[3] && positions[0] == positions[6])
		return true;
	
	if (positions[1] == positions[4] && positions[1] == positions[7] ||
	positions[2] == positions[5] && positions[2] == positions[8])
		return true;
	
	// Not winner
	else
		return false;
};
//didWin();
//console.log("Has the game been won? ", didWin());

// Function to handle accepting and applying a move
// If move is valid - make it
const applyMove = (move, player) => {

	let letter = (player == 1) ? "X" : "O";
	positions[move] = letter;
	
	if (player == 1) {
		player1.push(positions[move]);
		positions.push(letter);
		console.log(positions[move]);
		console.log("Player 1: ",player1);
		// return true;
	} else {
		player2.push(move);
		positions.push(move);
		console.log(positions[move]);
		console.log("Player 2: ",player2);
		// return true;
	} 
	return true;
};
// applyMove(2, 2);
// Process a move - in charge of the flow of the "process to move"
const processMove = (move, player) => {
	// check to see if move is valid
	if(!isValidMove(move)) 
		return false;
	else {
		applyMove(move, player);
		console.log("Applying a move");
		// answer = (positions[move] === "") ? true : false;
		// if valid - check for a winner
		if (didWin()) {
			console.log("This move wins the game!");
			// return true;
		}
		// if valid - check for a draw
		else if (isDraw()) {
			console.log("This game has a draw! No one wins.");
			// return true;
		}
		return true;
	}
		
};
processMove(2, 2);
console.log("Processing move");

// Determine if this cell is valid for a move
// isValidMove();

