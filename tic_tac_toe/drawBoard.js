// function to print out a variation of a Tic Tac Toe board

let row;
let column;
const blank = String.fromCharCode(32);
const vertical = String.fromCharCode(124);
const horiz = String.fromCharCode(45);
const plus = String.fromCharCode(43);

let positions = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
const blankRow = blank + blank + blank + vertical + blank + blank + blank + vertical + blank + blank + blank;
// const inputRow = blank + positions[i] + blank + vertical + blank + positions[i] + blank + vertical + blank + positions[i] + blank;
// const inputRow = blank + positions[i] + blank + vertical + blank + positions[i] + blank + vertical + blank + positions[i] + blank;	 
const horizRow = horiz + horiz + horiz + plus + horiz + horiz + horiz + plus + horiz + horiz + horiz;

const drawRows = () => {
	// //to print out blank rows
	// for (row = 1; row < 4; row++) {
	// 	// console.log(blank, blank, blank, vertical, blank, blank, blank, vertical, blank, blank, blank);
	// 	console.log(blankRow);
	// }
	
	// to print out Xs and Os within the boxes -> hardcoded
	for (row = 1; row < 3; row++) {
		// console.log(blank, blank, blank, vertical, blank, blank, blank, vertical, blank, blank, blank);
		// console.log(blank, "X", blank, vertical, blank, "O", blank, vertical, blank, "X", blank);
		// console.log(blank, blank, blank, vertical, blank, blank, blank, vertical, blank, blank, blank);
		console.log(blankRow);
		console.log(blankRow);
		console.log(horizRow);
		console.log(blankRow);
		
		
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
	
// drawBoard();
drawRows();
