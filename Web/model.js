
var currentGame = function(lives, cards) {
  this.oLive = lives;
  this.oCardLength = cards.length;
  this.lives = lives;
  this.cards = cards;
};
currentGame.prototype.getOriginalLives = function() {
  return this.oLive;
}
currentGame.prototype.getOriginalLength = function() {
  return this.oCardLength;
}
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
  return this.cards.unshift(c);
}



var model = function() {
  //Privates
  var myFirebaseRef = new Firebase("https://burning-heat-2213.firebaseio.com/");
  var data = sessionStorage.getItem('data');
  var flashCards = [];
  var question = [],answer=[];
  for(i=0;i<5;i++){

              myFirebaseRef.child(data +"/cards/"+i+"/Question").on("value", function(snapshot){
              question[i] = snapshot.val();
              //alert(question[i]);
                 //flashCards[i] = {Question:question[i],Answer:answer[i]};
              });

              myFirebaseRef.child(data +"/cards/"+i+"/Answer").on("value", function(snapshot) {
              answer[i] = snapshot.val();
             // alert(answer[i]);
               //  flashCards[i] = {Question:question[i],Answer:answer[i]};
              });
               
              //while(question == "" && answer == "");
              
  }
    
      for(i = 0 ; i < 5 ; i++)
       flashCards[i] = {Question:question[i],Answer:answer[i]}; 
        alert(flashCards.length);
         this.game = new currentGame(3,flashCards);
   
   

  //alert(flashCards.length);
    //for(i = 0 ; i < 5 ; i++)
    //  flashCards[i] = {Question:question[i],Answer:answer[i]};
};

model.prototype.getCurrentGame = function(){
  return this.game;
};
