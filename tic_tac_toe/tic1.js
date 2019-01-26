let row;
const blank = String.fromCharCode(32);
const vertical = String.fromCharCode(124);
const horiz = String.fromCharCode(45);
const plus = String.fromCharCode(43);

// to get a hold of where user will input their mark of X or O
// let positions = [0, 1, 2, 3, 4, 5, 6, 7, 8];
// to store 'empty' value upon starting a new game
let positions = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

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
let empty = [];

// bool for winner set to false b/c no one has won the game yet
let winner = false; 


const drawBoard = () => {
	// to print out Xs and Os within the boxes -> hardcoded
	// printing out position numbers 0, 1, 2 --> to get way for user input
	for (row = 1; row < 2; row++) {
		console.log(blank, blank, blank, vertical, blank, blank, blank, vertical, blank, blank, blank);
		console.log(blank, positions[0], blank, vertical, blank, positions[1], blank, vertical, blank, positions[2], blank);
		console.log(blank, blank, blank, vertical, blank, blank, blank, vertical, blank, blank, blank);
	}
	
	console.log(horiz, horiz, horiz, plus, horiz, horiz, horiz, plus, horiz, horiz, horiz);
	
	for (row = 1; row < 2; row++) {
		console.log(blank, blank, blank, vertical, blank, blank, blank, vertical, blank, blank, blank);
		console.log(blank, positions[3], blank, vertical, blank, positions[4], blank, vertical, blank, positions[5], blank);
		console.log(blank, blank, blank, vertical, blank, blank, blank, vertical, blank, blank, blank);
	}
	
	console.log(horiz, horiz, horiz, plus, horiz, horiz, horiz, plus, horiz, horiz, horiz);
	
	for (row = 1; row < 2; row++) {
		console.log(blank, blank, blank, vertical, blank, blank, blank, vertical, blank, blank, blank);
		console.log(blank, positions[6], blank, vertical, blank, positions[7], blank, vertical, blank, positions[8], blank);
		console.log(blank, blank, blank, vertical, blank, blank, blank, vertical, blank, blank, blank);
	}
	
};
	

// board will be created with positions filled in with moves
const importBoard = (string) => {
	
	// Add played positions to empty positions array
	for (let i = 0; i < positions.length; i++) {
		 positions[i] = string[i];
	}
		console.log(positions);
	
	// to push moves to player arrays
	// if move is x push to player1 array
	for (let j = 0; j < positions.length; j++) {	
		
		if (positions[j] == 'X' || positions[j] == 'x')
			player1.push(j);
		else if (positions[j] == 'O' || positions[j] == 'o')
			player2.push(j);
		else
			empty.push(j);
	
	}

	console.log(player1, player2);
};

// Import hard-coded positions into board
let boardPositions = ['X', 'x', 'X', 'o', 'X', 'O', 'X', 'x', 'O'];
importBoard(boardPositions);

drawBoard();

// const playerMove = (position, letter) => {
	
	
// }


// Determine if a "move" is valid before adding player input to the board
const isValidMove = (position) => {
	
	// Setting isValid to false so that it will be turned true when player makes a valid choice
	let isValid = false;
	
	// Move can't be less than 0 or greater than 8
	if (position < 0 || position > 8) {
		console.log("You can only choose a position from 0-8.");
		console.log("Is this move valid?", isValid);
		return;
	// If the position is already occupied
	} else if (positions[position] != ' ') {
		console.log("This position is already taken!");
		console.log("Is this move valid?", isValid);
		return;
	// Position is empty and valid
	} else {
		isValid = true;
		console.log("Great idea! Please enter an 'X' or 'O'.");
		console.log("Is this move valid?", isValid);
		return true;
	}

};

// Determine if this cell is valid for a move
// isValidMove(1);

// Check the state of the board and determine if the game is over (not by winning for the moment)
const isGameOver = () => {
	
	// If length is 9 or greater, there are no more moves to be made = DRAW
	if (player1.length + player2.length >= 9)
		return true;
	else
		return false;
	
};
isGameOver();
console.log("Is the game over?", isGameOver());

// Determine if there are any winning combinations
const isWinner = () => {
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
isWinner();
console.log("Has the game been won? ", isWinner());


// counter to keep track of 3 in a row within winningPositions
	// let counter;
	// let winner = [];
	// // Check Rows for wins
	// if (player1.length >= 3 || player2.length >= 3) {
	// 	for (let i = 0; i < winningPositions.length - 4; i++) {
	// 		counter = 0;
	// 		for (let j = 0; j < winningPositions[i].length; j++) {
				
	// 			// If player1/player2 array contains an element from ONE of the winning arrays, iterate through THAT array
	// 			for (let k = 0; k < player1.length || k < player2.length; k++){
	// 				if (player1[k] == winningPositions[i][j] || player2[k] == winningPositions[i][j]) {
	// 				counter++;
	// 				winner.push(k);
	// 				}
	// 				if (counter === 3)
	// 					return true;	
	// 				}
	// 			console.log(winner);
	// 		}
	// 	}
	// }
	// return false;