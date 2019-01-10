let row;
let column;
const blank = String.fromCharCode(32);
const vertical = String.fromCharCode(124);
const horiz = String.fromCharCode(45);
const plus = String.fromCharCode(43);


const boardPositions = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let initialState = [null, null, null, null, null, null, null, null, null];


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
