// function is comparing how to change the first word into the second word by 
// returning the number of steps each character must take to become the character of the other string

function findSteps (str1, str2, length) {
	
	
	let stepsAway = [];
	
	for (let i = 0; i < length; i++) {
		
		stepsAway[i] = (str2.charCodeAt(i)) - (str1.charCodeAt(i));
		
	}
	
	return stepsAway;
}
findSteps("this", "bear", 4);

// findSteps("this", "that", 4);