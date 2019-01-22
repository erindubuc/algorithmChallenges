let row;
const blank = String.fromCharCode(32);
const vertical = String.fromCharCode(124);
const horiz = String.fromCharCode(45);
const plus = String.fromCharCode(43);

// to get a hold of where user will input their mark of X or O
// let positions = [0, 1, 2, 3, 4, 5, 6, 7, 8];
// to store 'empty' value upon starting a new game
let positions = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

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

let move, // whose turn it is -> X or O
	turn, // boolean? X turn = true, O = false
	moveCount;  // counter 

// Arrays to hold player moves
// When player makes a move, their position number will get pushed to their array
// Later, these arrays can be compared with the winningPositions arrays to find a winner
let player1 = [];
let player2 = [];

const drawBoard = () => {
// const drawRows = () => {
	// //to print out blank rows
	// for (row = 1; row < 4; row++) {
	// 	console.log(blank, blank, blank, vertical, blank, blank, blank, vertical, blank, blank, blank);
	// }
	
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

// const horizRow = () => {
// 	console.log(horiz, horiz, horiz, plus, horiz, horiz, horiz, plus, horiz, horiz, horiz);
// };

// const drawBoard = () => {
// 	for (let i = 0; i < 2; i++) {
// 		drawRows();
// 		horizRow();
// 	}
// 	drawRows();
// };
	
drawBoard();

