let positions = ["","","","","","","","",""];

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
// let position;
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
	for (let j = 0; j < positions.length; j++) {	
		
		if (positions[j] == "X" || positions[j] == "x")
			player1.push(j);
		else if (positions[j] == "O" || positions[j] == "o")
			player2.push(j);
	}

	console.log("Player 1: ",player1);
	console.log("Player 2: ",player2);
};
// drawBoard();

// Determine if a "move" is valid before adding player input to the board
const isValidMove = (move) => {
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
	// let position;
	// positions[position] = position;

	// Winners
	if (positions[0] == positions[1] && positions[0] == positions[2] && positions[0] != '') 
		return true;
	if (positions[3] == positions[4] && positions[3] == positions[5] && positions[3] != '')
		return true;
	if (positions[6] == positions[7] && positions[6] == positions[8] && positions[6] != '')
		return true;
	if (positions[0] == positions[4] && positions[0] == positions[8] && positions[0] != '')
		return true;
	if (positions[2] == positions[4] && positions[2] == positions[6] && positions[2] != '')
		return true;
	if (positions[0] == positions[3] && positions[0] == positions[6] && positions[0] != '')
		return true;
	if (positions[1] == positions[4] && positions[1] == positions[7] && positions[1] != '')
		return true;
	if (positions[2] == positions[5] && positions[2] == positions[8] && positions[2] != '')
		return true;
		
	// Not winner
	else
		return false;
};
//didWin();
//console.log("Has the game been won? ", didWin());

// Function to handle accepting and applying a move
const applyMove = (move, player) => {

	let letter = (player == 1) ? "X" : "O";
	positions[move] = letter;
	
	if (player == 1) {
		player1.push(move);
		positions.splice(positions[move], 1, letter);
		console.log(positions[move]);
		console.log("Player 1: ",player1);
		console.log(positions);
	} else {
		player2.push(move);
		positions.splice(positions[move], 1, letter);
		// positions.push(letter);
		console.log(positions[move]);
		console.log("Player 2: ",player2);
		console.log(positions);
	} 
	return true;
};

// Reset board after a win or draw
const resetBoard = () => {
	for (let i = 0; i < positions.length; i++)
		positions[i] = "";
};

// Reset player arrays after win or draw
const resetPlayers = () => {
		player1 = [];
		player2 = [];
};


// Check for win and draw throughout play
const isGameOver = () => {
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
	
};
// applyMove(2, 2);

// Process a move - in charge of the flow of the "process to move"
const processMove = (move, player) => {
	// check to see if move is valid
	if(!isValidMove(move)) 
		return false;
	else {
		applyMove(move, player);
		isGameOver();
		return true;
	}
		
};



// Import hard-coded positions into board
let boardPositions = ["X", "O", "", "X", "", "O", "X", "", "O"];
importBoard(boardPositions);

processMove(2, 1);
processMove(2, 2);
// console.log("Processing move");
console.log(positions);
console.log("player1: ", player1);
console.log("player2: ", player2);




