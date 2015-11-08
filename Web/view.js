var view = function() {
var vm = this;
vm.b = new Battle();
vm.answerBox = document.getElementById("AnswerTextBox");
vm.questionBox = document.getElementById("QuestionTextBox");
vm.submitButton = document.getElementById("SubmitButton");
if(vm.answerBox == null || vm.questionBox == null)
{
  alert("Answer/Question box null, won't work");
}
}

view.prototype.startRender = function() {
  this.b.startRender();
}

view.prototype.setQuestionBox = function() {
return this.questionBox;
}
view.prototype.getAnswerBox = function() {
return this.answerBox;
}
view.prototype.setQuestionText = function(value) {
this.questionBox.innerHTML = value;
//Access Document
}
view.prototype.getAnswerText = function() {
return this.answerBox.value;
//Access Document
}

view.prototype.submit = function() {
//Access Document
return this.submitButton;
}
