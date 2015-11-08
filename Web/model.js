

var model = function() {
  //Privates
  this.cardIndex = 0;
  this.numOfCards = 5;
  this.lives = 3;
  this.cards= [{Question: "Write the value of PI upto 2 decimal places?",Answer:"3.14"},
                {Question: "What is the name of this game",Answer:"flashattack"},
                {Question: "What is 1+1",Answer:"2"},
                {Question: "What is 0 factorial",Answer:"1"},
                {Question: "what is 2 to the power 10",Answer:"1024"}
              ];
};



model.prototype.getCard = function() {
  var card = this.cards[this.cardIndex];
  this.cardIndex += 1;
  return card;
};

model.prototype.getLives = function() {
  return this.lives;
};

model.prototype.getCardsRemaining = function() {
  return (this.cardIndex == this.cards.length);
};
