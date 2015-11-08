
var currentGame = function(lives, cards) {
  this.lives = lives;
  this.cards = cards;
};
currentGame.prototype.getCard = function() {
  return this.cards.pop();
};

currentGame.prototype.currentLives = function() {
  return this.lives;
};

currentGame.prototype.currentBossLives = function() {
  return this.cards.length;
};
currentGame.prototype.loseLife = function() {
  this.lives -= 1;
};
currentGame.prototype.isGameOver = function() {
  return this.lives <= 0;
};
currentGame.prototype.isVictory = function() {
  return this.cards.length == 0;
};
currentGame.prototype.addCard = function(c) {
  return this.cards.push(c);
}



var model = function() {
  //Privates
  this.game = new currentGame(3,[{Question: "Write the value of PI upto 2 decimal places?",Answer:"3.14"},
                {Question: "What is the name of this game",Answer:"flashattack"},
                {Question: "What is 1+1",Answer:"2"},
                {Question: "What is 0 factorial",Answer:"1"},
                {Question: "what is 2 to the power 10",Answer:"1024"}
              ]);
};


model.prototype.getCurrentGame = function() {
  return this.game;
};
