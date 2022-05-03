// clicking "Start Quiz" button activates timer


// var timeScore = function() {

//     var countdown = seconds - 0;

//     document.getElementById("timer").innerHTML = "Time: " + countdown;

//     if (seconds <= 0) {
//         clearInterval(timeScore);
//     }
// };

// document.getElementById("start-button").addEventListener("click", timeScore);


// Questions (and answers) to include in quiz:
// Commonly used data types do NOT include (strings, booleans, alerts*, numbers)
// The condition in an if/else statement is enclosed with (quotes, curly brackets, parenthesis*, square brackets)
// Arrays in Javascript can be used to store (numbers and strings, other arrays, booleans, all of the above*)
// String values must be enclosed within ___  when being assigned to variables. (commas, curly brackets, quotes*, parenthesis)
// A very useful tool used during development and debugging for printing content to the debugger is (JavaScript, terminal/bash, for loops, console.log*)

// when Start Quiz is clicked, first question shows up:
var beginQuiz = function() {
    containerEl = document.querySelector(".opening-container");
    var quizContainerEl = document.createElement("div");
    quizContainerEl.className = "quiz-container"

    var questionEl = document.createElement("h1");
    questionEl.className = "quiz-question";
    questionEl.textContent = "Commonly used data types do NOT include:";
    quizContainerEl.appendChild(questionEl);

    var answerListEl = document.createElement("ul");
    answerListEl.className = "answer-list";

    var answerChoiceOne = document.createElement("button");
    answerChoiceOne.className = ("btn");
    answerChoiceOne.textContent = "strings";
    answerChoiceOne.id = "wrong-answer";
    answerListEl.appendChild(answerChoiceOne);
    
    var answerChoiceTwo = document.createElement("button");
    answerChoiceTwo.className = ("btn");
    answerChoiceTwo.textContent = "booleans";
    answerChoiceTwo.id = "wrong-answer";
    answerListEl.appendChild(answerChoiceTwo);
    
    var answerChoiceThree = document.createElement("button");
    answerChoiceThree.className = ("btn");
    answerChoiceThree.textContent = "alerts";
    answerChoiceThree.id = "right-answer";
    answerListEl.appendChild(answerChoiceThree);

    var answerChoiceFour = document.createElement("button");
    answerChoiceFour.className = ("btn");
    answerChoiceFour.textContent = "numbers";
    answerChoiceFour.id = "wrong-answer";
    answerListEl.appendChild(answerChoiceFour);

    quizContainerEl.appendChild(answerListEl);
    containerEl.replaceWith(quizContainerEl);

    document.getElementById("wrong-answer").addEventListener("click", wrongAnswer);
    document.getElementById("right-answer").addEventListener("click", rightAnswer);
}

var wrongAnswer = function() {
    console.log("boo~")
    // comment on bottom should appear "Wrong!"
    // remove 10 seconds from Timer
    // move onto next question
}
var rightAnswer = function() {
    console.log("good job!")
    // comment on bottom should appear saying "Correct!"
    // move onto next question
}

document.getElementById("start-button").addEventListener("click", beginQuiz);

// do questions and answers need to be stored in array? And if so, are they objects?

// how to connect wrong answer to both timer and comment on bottom? ***remaining time is the score

// how to connect right answer with comment on bottom (footer?)

// we need to store high scores, as well as initial with the score
