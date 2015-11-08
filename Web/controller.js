
var controller = function(v, m){
var vm = this;
getnewCard();
/*class character {

	constructor(life){
		this.life = life ;

	}
}


player = new character(3);
boss = new character(5);
*/

	v.submit().addEventListener("click",function() {
		var answer = v.getAnswerText();
		var correctAnswer = vm.c.Answer;
		if(answer.localeCompare(correctAnswer) == 0){
			alert("correct");
			getnewCard();
		}
		else{
			alert("incorrect");	
			getnewCard();
		}

	});



	function getnewCard(){

		vm.c = m.getCard();
		console.log(vm.c);
		v.setQuestionText(vm.c.Question);

	}

}