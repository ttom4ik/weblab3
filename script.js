var correctAnswers = {
  q1: "a",
  q2: "b",
  q3: "c"
};

var form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  var totalQuestions = Object.keys(correctAnswers).length;
  var score = 0;

  for (var i = 1; i <= totalQuestions; i++) {
    var questionName = "q" + i;
    var selectedAnswer = form.elements[questionName].value;

    if (selectedAnswer === correctAnswers[questionName]) {
      score++;
    }
  }

  var percentage = (score / totalQuestions) * 100;
  percentage = percentage.toFixed(0);

  localStorage.setItem('percentage', percentage);

  window.location.href = 'results.html';
});