function CardConstructor(suit, value){
	this.suit = suit,
	this.value = value;
}

function DeckConstructor(){
	this.deck = [];
	this.makeDeck = function(){
		for(var i = 0; i < 4; i++){
			var suit;
			switch(i){
				case 0:
					suit = "Spades";
					break;
				case 1:
					suit = "Hearts";
					break;
				case 2:
					suit = "Clubs";
					break;
				case 3:
					suit = "Diamonds";
					break;
			}
		var cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
		for (var k = 0; k< cards.length; k++){
			var new_card = new CardConstructor(suit, cards[k]);
			this.deck.push(new_card);
		}
	}
	}
	this.showDeck = function(){
		console.log(this.deck);
	}
	this.shuffle = function(){
		for (var i = this.deck.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = this.deck[i];
        this.deck[i] = this.deck[j];
        this.deck[j] = temp;
    }
    return this.deck;
	}
	this.reset = function(){
		this.makeDeck();
	}
	this.deal_a_card = function(){
		var random = Math.floor((Math.random() * 52) + 1);
		var card = this.deck[random];
		this.deck.splice(random,1);
		// console.log("Card: "+ card['value']+ " "+card['suit']);
		return card;
	}
}
function Player(name){

    this.name = name;
    this.hand = [];

   this.showHand = function(){
       console.log(this.hand);
   }

    this.take_a_card = function(deck){
        var card = deck.deal_a_card();
        this.hand.push(card);
    }

    this.discard = function(card){
        this.hand.splice(this.hand[card],1);
    }

}
var deck1 = new DeckConstructor();
deck1.makeDeck();
// deck1.showDeck();
// deck1.shuffle(deck1);
// deck1.showDeck();
// deck1.reset();
// deck1.showDeck();
// deck1.deal_a_card();
// deck1.showDeck();
var cole = new Player("Cole");
cole.take_a_card(deck1);
cole.take_a_card(deck1);
cole.take_a_card(deck1);
cole.take_a_card(deck1);
cole.take_a_card(deck1);
cole.showHand();
cole.discard(1);
cole.discard(1);
cole.discard(1);
cole.discard(1);
cole.showHand();