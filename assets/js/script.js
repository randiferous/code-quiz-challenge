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
// The condition in an if/else statement is enclosed with (quotes, curly brackets, parenthesis*, square brackets)
// Arrays in Javascript can be used to store (numbers and strings, other arrays, booleans, all of the above*)
// String values must be enclosed within ___  when being assigned to variables. (commas, curly brackets, quotes*, parenthesis)
// A very useful tool used during development and debugging for printing content to the debugger is (JavaScript, terminal/bash, for loops, console.log*)
containerEl = document.querySelector(".opening-container");
bottomEl = document.querySelector(".bottom-placeholder");

var quizContainerEl = document.createElement("div");
quizContainerEl.className = "quiz-container";

var wrongAnswer = function() {
    var footerWrong = document.createElement("h2");
    footerWrong.className = "answer-response";
    footerWrong.textContent = "Wrong!";
    bottomEl.replaceWith(footerWrong);
    // remove 10 seconds from Timer
    // move onto next question
}
var rightAnswer = function() {
    var footerRight = document.createElement("h2");
    footerRight.className = "answer-response";
    footerRight.textContent = "Correct!";
    bottomEl.replaceWith(footerRight);
    // move onto next question
}
// when Start Quiz is clicked, first question shows up:
var beginQuiz = function() {
    
    var questionEl = document.createElement("h1");
    questionEl.textContent = "Commonly used data types do NOT include:";
    quizContainerEl.appendChild(questionEl);

    var answerListEl = document.createElement("ul");
    answerListEl.className = "answer-list";

    var answerChoiceOne = document.createElement("button");
    answerChoiceOne.className = ("btn");
    answerChoiceOne.textContent = "strings";
    answerListEl.appendChild(answerChoiceOne);
    
    var answerChoiceTwo = document.createElement("button");
    answerChoiceTwo.className = ("btn");
    answerChoiceTwo.textContent = "booleans";
    answerListEl.appendChild(answerChoiceTwo);
    
    var answerChoiceThree = document.createElement("button");
    answerChoiceThree.className = ("btn");
    answerChoiceThree.textContent = "alerts";
    answerListEl.appendChild(answerChoiceThree);

    var answerChoiceFour = document.createElement("button");
    answerChoiceFour.className = ("btn");
    answerChoiceFour.textContent = "numbers";
    answerListEl.appendChild(answerChoiceFour);

    quizContainerEl.appendChild(answerListEl);
    containerEl.replaceWith(quizContainerEl);

    answerChoiceOne.addEventListener("click", wrongAnswer);
    answerChoiceTwo.addEventListener("click", wrongAnswer);
    answerChoiceFour.addEventListener("click", wrongAnswer);
    answerChoiceThree.addEventListener("click", rightAnswer);

    // if (addEventListener = true) {
        // questionTwo(questionEl);
        // }
  
}

var questionTwo = function(questionEl) {
    var questionTwoEl = document.createElement("h1");
    questionTwoEl.textContent = "The condition in an if/else statement is enclosed with";
    questionEl.replaceWith(questionTwoEl);
}

document.getElementById("start-button").addEventListener("click", beginQuiz);

// do questions and answers need to be stored in array? And if so, are they objects?

// how to connect wrong answer to both timer and comment on bottom? ***remaining time is the score

// how to connect right answer with comment on bottom (footer?)

// we need to store high scores, as well as initial with the score