
var controller = function(v, m){
var vm = this;
  //console.log("Starting game Lives:" + m.getCurrentGame().currentLives())
//
	v.submit().addEventListener("click", function(){
    checkCurrentAnswer();
  });
  v.getAnswerBox().addEventListener("keyup", function (e) {
    if (e.keyCode == 13) {
        checkCurrentAnswer();
    }
});

  function checkCurrentAnswer(){
		var answer = v.getAnswerText();
		var correctAnswer = vm.c.Answer;
    var correct = false;
    if(answer != "") {
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
    }
    //clear answer text
    v.getAnswerBox().value = "";
	}


	function getnewCard(){
		vm.c = m.getCurrentGame().getCard();
    console.log(vm.c);
		v.setQuestionText(vm.c.Question);
	}


  m.databaseCall(function(snapshot) {
    m.handleSnapshot(snapshot.val());
    v.startRender(m.getCurrentGame().getOriginalLives(),m.getCurrentGame().getOriginalLength());
    getnewCard();
  })



}
