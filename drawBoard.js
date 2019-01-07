// function to print out a variation of a Tic Tac Toe board

let row;
let column;
const blank = String.fromCharCode(127);
const vertical = String.fromCharCode(124);
const horiz = String.fromCharCode(95);
	 
function drawRow() {
	
	for (row = 1; row < 4; row++) {
		console.log(blank, blank, blank, vertical, blank, blank, blank, vertical, blank, blank, blank);
	}
}

// function drawBoard() {

	
// 	// start with row 1
// 	for (row = 1; row < 12; row++) {
		
// 		// for each column in the row (12 columns)
// 		for (column = 1; column < 12; column++) {
			
// 			if (!row % 4) {
				
// 			}
			 
// 			else {
// 				console.log(horiz);	
// 			}
			
			
				
// 			}
			
// 		}
		
	
	
	
// 	}

// }
// drawBoard();
drawRow();