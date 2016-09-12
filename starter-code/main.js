// Adding King and Queen cards
var cardOne = "king";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "queen";

/*
if (cardTwo === cardFour) {
	alert("You found a match!");
} else if (cardOne === cardThree) {
	alert("You found a match!");
} else {
	alert("Sorry, Try again.");
}
*/

var createBoard = function() {
	for (var i=0 ; i < 4 ; i++) {
		document.getElementById('game-board');
		var newCard = document.createElement('div');
		newCard.className = 'card';
		document.getElementById('game-board').appendChild(newCard);
	}
};
createBoard();
