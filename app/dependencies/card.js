(() => {
	"use strict"
	function Card(faceValue, suit, cardValue, numericValue){
		this.faceValue = faceValue;
		this.suit = suit;
		this.cardValue = cardValue;
		this.numericValue = numericValue;
	}

	Card.prototype.cardImageLocation = function(){
		let location = `cards/images/${this.cardValue}_of_${this.suit}.png`;
		return location;
	};


	module.exports = Card;
})();