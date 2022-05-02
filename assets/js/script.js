// clicking "Start Quiz" button activates timer


// var timeScore = function() {

//     var countdown = seconds - 0;

//     document.getElementById("timer").innerHTML = "Time: " + countdown;

//     if (seconds <= 0) {
//         clearInterval(timeScore);
//     }
// };

// document.getElementById("start-button").addEventListener("click", timeScore);


// when Start Quiz is clicked, first question shows up:

// Questions (and answers) to include in quiz:
// Commonly used data types do NOT include (strings, booleans, alerts*, numbers)
// The condition in an if/else statement is enclosed with (quotes, curly brackets, parenthesis*, square brackets)
// Arrays in Javascript can be used to store (numbers and strings, other arrays, booleans, all of the above*)
// String values must be enclosed within ___  when being assigned to variables. (commas, curly brackets, quotes*, parenthesis)
// A very useful tool used during development and debugging for printing content to the debugger is (JavaScript, terminal/bash, for loops, console.log*)

// - answers are numbered
// - I am informed when previous question was "Correct!" or "Wrong!" 
//

var beginQuiz = function() {

    containerEl = document.querySelector(".opening-container");
    var quizContainerEl = document.createElement("div");
    quizContainerEl.className = "quiz-container"

    var questionEl = document.createElement("h1");
    questionEl.className = "quiz-question";
    questionEl.textContent = "Commonly used data types do NOT include:";
    quizContainerEl.appendChild(questionEl);
    containerEl.replaceWith(quizContainerEl);
}

document.getElementById("start-button").addEventListener("click", beginQuiz);

// do questions and answers need to be stored in array? And if so, are they objects?

// how to connect wrong answer to both timer and comment on bottom? ***remaining time is the score

// likewise for a right answer

// we need to store high scores, as well as initial with the score
