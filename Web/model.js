

var model = function() {
  //Privates
  this.cardIndex = 0;
  this.lives = 3;
  this.cards = {Question: "What is the first 3 Digits of PI?",Answer:"3.14"};
};



model.prototype.getCard = function() {
  var card = this.cards;
  this.cardIndex += 1;
  return card;
};

model.prototype.getLives = function() {
  return this.lives;
};

model.prototype.getCardsRemaining = function() {
  return (this.cardIndex == this.cards.length);
};
