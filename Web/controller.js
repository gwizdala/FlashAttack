
var controller = function(v, m){
var vm = this;
  console.log("Starting game Lives:" + m.getCurrentGame().currentLives())
  getnewCard();
	v.submit().addEventListener("click",function() {
		var answer = v.getAnswerText();
		var correctAnswer = vm.c.Answer;
		if(answer.localeCompare(correctAnswer) == 0){
      console.log("GOOD JOB");
      if(!m.getCurrentGame().isVictory())
      {
        getnewCard();
      }
      else {
        alert("Victory!");
      }
		}
		else{
      m.getCurrentGame().loseLife();
      console.log("LOST LIFE :(");
      if(!m.getCurrentGame().isGameOver())
      {
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

  v.startRender();

}
