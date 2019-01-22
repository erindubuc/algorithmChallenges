let row;
const blank = String.fromCharCode(32);
const vertical = String.fromCharCode(124);
const horiz = String.fromCharCode(45);
const plus = String.fromCharCode(43);

// to get a hold of where user will input their mark of X or O
// let positions = [0, 1, 2, 3, 4, 5, 6, 7, 8];
// to store 'empty' value upon starting a new game
// let positions = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
let positions = ['X', ' ', 'O', ' ', 'X', 'O', 'X', ' ', 'O'];
const winningPositions = [
	[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,4,8],
	[2,4,6],
	[0,3,6],
	[1,4,7],
	[2,5,8]
	];

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
	
// drawBoard();

// board will be created with positions filled in with moves
const importBoard = (positions) => {
	drawBoard();

	// to push moves to player arrays
	// if move is x push to player1 array
	for (let i = 0; i < positions.length; i++) {	
		
		if (positions[i] == 'X')
			player1.push(i);
		else if (positions[i] == 'O')
			player2.push(i);
		else
			empty.push(i);
	
	}
	console.log(player1, player2);
};

importBoard(positions);