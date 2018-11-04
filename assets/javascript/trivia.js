function check() {

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var correct = 0;

    if (question1 == "Springfield") {
        correct++;
    }
    if (question2 == "Haiti") {
        correct++;
    }
    if (question3 == "Barack Obama") {
        correct++;
    }
    if (question4 == "South America") {
        correct++;
    }
    if (question5 == "1804") {
        correct++;
    }
  
    var messages = ["Great job!", "That's just okay", "You really need to do better", "MEH", "Be Prepared Next Time","Empty Brain"];
  ;

    var range;

    if (correct < 1) {
        range = 4;
    }

    if (correct > 0 && correct < 5) {
        range = 0;
    }

    if (correct > 5) {
        range = 1;
    }
    if(correct < 4)
    range = 4;

    document.getElementById("after_submit").style.visibility = "visible";

    document.getElementById("message").innerHTML = messages[range];
    document.getElementById("number_correct").innerHTML = "You Got " + correct + " correct.";
  
}