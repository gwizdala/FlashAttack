var view = function() {
var vm = this;
vm.answerBox = document.getElementById("AnswerTextBox");
vm.questionBox = document.getElementById("QuestionTextBox");
vm.submitButton = document.getElementById("SubmitButtom");
if(vm.answerBox == null || vm.questionBox == null)
{
  alert("Answer/Question box null, won't work");
}
}

view.prototype.setQuestionBox = function() {
return vm.questionBox;
}
view.prototype.getAnswerBox = function() {
return vm.answerBox;
}
view.prototype.setQuestionText = function(value) {
return vm.questionBox.value;
//Access Document

}
view.prototype.getAnswerText = function() {
return vm.answerBox.value;
//Access Document
}
