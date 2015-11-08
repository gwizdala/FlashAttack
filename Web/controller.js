
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
  		if(answer.toLowerCase().localeCompare(correctAnswer.toLowerCase()) == 0){
        console.log("GOOD JOB");
        correct = true;
        if(!m.getCurrentGame().isVictory())
        {
          v.updateBattle(correct,m.getCurrentGame().currentLives(),m.getCurrentGame().currentBossLives());
          getnewCard();
        }
        else {
         // vm.end=new Date();
        //  vm.totalTime=vm.end-vm.start;
        totalTime=(new Date() - vm.start)/1000;
				sessionStorage.setItem("winCondition", true, "totalTime", totalTime);			
				sessionStorage.setItem("totalTime", totalTime);
          window.location= "stats.html";
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
          //vm.end=new Date();
          //vm.totalTime=vm.end-vm.start;
        totalTime=(new Date() - vm.start)/1000;
				sessionStorage.setItem("winCondition", false);
				sessionStorage.setItem("totalTime", totalTime);
        window.location= "stats.html";
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
   vm.start = new Date();

   getnewCard();
  })



}
