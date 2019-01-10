// function to print out a variation of a Tic Tac Toe board

let row;
let column;
const blank = String.fromCharCode(32);
const vertical = String.fromCharCode(124);
// const horiz = String.fromCharCode(95);
const horiz = String.fromCharCode(45);
const plus = String.fromCharCode(43);
// const blank = String.fromCharCode(127);
	 
const drawRows = () => {
	//to print out blank rows
	// for (row = 1; row < 4; row++) {
	// 	console.log(blank, blank, blank, vertical, blank, blank, blank, vertical, blank, blank, blank);
	// }
	
	// to print out Xs and Os within the boxes -> hardcoded
	for (row = 1; row < 2; row++) {
		console.log(blank, blank, blank, vertical, blank, blank, blank, vertical, blank, blank, blank);
		console.log(blank, "X", blank, vertical, blank, "O", blank, vertical, blank, "X", blank);
		console.log(blank, blank, blank, vertical, blank, blank, blank, vertical, blank, blank, blank);
	}
};

const horizRow = () => {
	console.log(horiz, horiz, horiz, plus, horiz, horiz, horiz, plus, horiz, horiz, horiz);
};

const drawBoard = () => {
	for (let i = 0; i < 2; i++) {
		drawRows();
		horizRow();
	}
	drawRows();
};
	
drawBoard();
