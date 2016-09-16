var cards = ['queen','queen','king','king'];
cardsInPlay =[];
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
	for (var i=0 ; i < cards.length ; i++) {
		document.getElementById('game-board');
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		document.getElementById('game-board').appendChild(cardElement);
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards)
      
      	board.appendChild(cardElement);
	}
};

var isTwoCards = function() {
	cardsInPlay.push(this.getAttribute('data-card'));

	console.log(this.getAttribute('data-card'));
    if (this.getAttribute('data-card') === 'king') {
      this.innerHTML = "<img src='king.png' alt='King of Spades'>"; 
    } else {
      this.innerHTML = "<img src='queen.png' alt='Queen of Diamonds'>";
    }

  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {
    // pass the cardsInPlay as an argument to isMatch function
    isMatch(cardsInPlay);
    // clear cards in play array for next try
    cardsInPlay = [];
	}
};


var isMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert('You found a match!');
	} else {
		alert('Sorry, try again.');
	}
	
	for (i = 0; i<cards.length; i++){
    document.getElementsByClassName('card')[i].innerHTML = " ";
};
createBoard();