
var controller = function(v, m){
var vm = this;
  console.log("Starting game Lives:" + m.getCurrentGame().currentLives())
  getnewCard();
	v.submit().addEventListener("click",function() {
		var answer = v.getAnswerText();
		var correctAnswer = vm.c.Answer;
    var correct = false;
		if(answer.localeCompare(correctAnswer) == 0){
      console.log("GOOD JOB");
      correct = true;
      if(!m.getCurrentGame().isVictory())
      {
        v.updateBattle(correct,m.getCurrentGame().currentLives(),m.getCurrentGame().currentBossLives());
        getnewCard();
      }
      else {
        alert("Victory!");
      }
		}
		else{
      m.getCurrentGame().loseLife();
      m.getCurrentGame().addCard(vm.c)
      console.log("LOST LIFE :(");
      if(!m.getCurrentGame().isGameOver())
      {
        v.updateBattle(correct,m.getCurrentGame().currentLives(),m.getCurrentGame().currentBossLives());
        getnewCard();
      }else {
        alert("Game Over!");
      }

		}
	});



	function getnewCard(){
		vm.c = m.getCurrentGame().getCard();
		v.setQuestionText(vm.c.Question);
	}

  v.startRender(m.getCurrentGame().getOriginalLives(),m.getCurrentGame().getOriginalLength());

}
