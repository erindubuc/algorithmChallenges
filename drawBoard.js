// function to print out a variation of a Tic Tac Toe board

let row;
let column;
const blank = String.fromCharCode(32);
// const blank = String.fromCharCode(127);
const vertical = String.fromCharCode(124);
const horiz = String.fromCharCode(95);
const plus = String.fromCharCode(43);
	 
function drawRows() {
	
	for (row = 1; row < 4; row++) {
		console.log(blank, blank, blank, vertical, blank, blank, blank, vertical, blank, blank, blank);
	}
}

function horizRow() {
	console.log(horiz, horiz, horiz, horiz, horiz, horiz, horiz, horiz, horiz, horiz, horiz);
}
function drawBoard() {
	for (let i = 0; i < 2; i++) {
		drawRows();
		horizRow();
	}
	drawRows();
}
	
drawBoard();
