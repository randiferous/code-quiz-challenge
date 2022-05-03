// clicking "Start Quiz" button activates timer


// var timeScore = function() {

//     var countdown = seconds - 0;

//     document.getElementById("timer").innerHTML = "Time: " + countdown;

//     if (seconds <= 0) {
//         clearInterval(timeScore);
//     }
// };

// document.getElementById("start-button").addEventListener("click", timeScore);


El = document.querySelector(".opening-container");
responseEl = document.querySelector(".answer-response");

var quizContainerEl = document.createElement("div");
var questionEl = document.createElement("h1");
questionEl.className = "question";
var answerListEl = document.createElement("ul");
answerListEl.className = "answer-list";
var answerChoiceOne = document.createElement("button");
answerChoiceOne.className = ("btn");
var answerChoiceTwo = document.createElement("button");
answerChoiceTwo.className = ("btn");
var answerChoiceThree = document.createElement("button");
answerChoiceThree.className = ("btn");
var answerChoiceFour = document.createElement("button");
answerChoiceFour.className = ("btn");

// when Start Quiz is clicked, first question shows up:
var beginQuiz = function() {
    questionEl.textContent = "Question #1: Commonly used data types do NOT include:";
    quizContainerEl.appendChild(questionEl);

    answerChoiceOne.textContent = "strings";
    answerListEl.appendChild(answerChoiceOne);
    
    answerChoiceTwo.textContent = "booleans";
    answerListEl.appendChild(answerChoiceTwo);
    
    answerChoiceThree.textContent = "alerts";
    answerListEl.appendChild(answerChoiceThree);

    answerChoiceFour.textContent = "numbers";
    answerListEl.appendChild(answerChoiceFour);

    quizContainerEl.appendChild(answerListEl);
    containerEl.replaceWith(quizContainerEl);

    answerChoiceOne.addEventListener("click", wrongAnswer);
    answerChoiceTwo.addEventListener("click", wrongAnswer);
    answerChoiceThree.addEventListener("click", rightAnswer);
    answerChoiceFour.addEventListener("click", wrongAnswer);
}

var rightAnswer = function() {
    responseEl.textContent = "Response to Question #1: Correct";
    questionTwo ();
}
var wrongAnswer = function() {
    responseEl.textContent = "Response to Question #1: Wrong";
    questionTwo ();
    // remove 10 seconds from Timer
}

// Second Question
var questionTwo = function() {
    questionEl.textContent = "Question #2: The condition in an if/else statement is enclosed with:";
    answerChoiceOne.textContent = "quotes";
    answerChoiceTwo.textContent = "parenthesis";
    answerChoiceThree.textContent = "curly brackets";
    answerChoiceFour.textContent = "square brackets";

    answerChoiceOne.addEventListener("click", wrongAnswerTwo);
    answerChoiceTwo.addEventListener("click", rightAnswerTwo);
    answerChoiceThree.addEventListener("click", wrongAnswerTwo);
    answerChoiceFour.addEventListener("click", wrongAnswerTwo);
}

var rightAnswerTwo = function () {
    responseEl.textContent = "Response to Question #2: Correct";
    questionThree ();
}
var wrongAnswerTwo = function () {
    responseEl.textContent = "Response to Question #2: Wrong";
    questionThree ();
}

// Third Question
var questionThree = function () {
    questionEl.textContent = "Question #3: Arrays in JavaScript can be used to store:"
    answerChoiceOne.textContent = "numbers and strings";
    answerChoiceTwo.textContent = "other arrays";
    answerChoiceThree.textContent = "booleans";
    answerChoiceFour.textContent = "all of the above";

    answerChoiceOne.addEventListener("click", wrongAnswerThree);
    answerChoiceTwo.addEventListener("click", wrongAnswerThree);
    answerChoiceThree.addEventListener("click", wrongAnswerThree);
    answerChoiceFour.addEventListener("click", rightAnswerThree);
}

var rightAnswerThree = function () {
    responseEl.textContent = "Response to Question #3: Correct";
    questionFour ();
}
var wrongAnswerThree = function () {
    responseEl.textContent = "Response to Question #3: Wrong";
    questionFour ();
}

// Fourth Question
var questionFour = function () {
    questionEl.textContent = "Question #4: String values must be enclose within ____ when being assigned to variables."
    answerChoiceOne.textContent = "commas";
    answerChoiceTwo.textContent = "curly brackets";
    answerChoiceThree.textContent = "quotes";
    answerChoiceFour.textContent = "parenthesis";

    answerChoiceOne.addEventListener("click", wrongAnswerFour);
    answerChoiceTwo.addEventListener("click", wrongAnswerFour);
    answerChoiceThree.addEventListener("click", rightAnswerFour);
    answerChoiceFour.addEventListener("click", wrongAnswerFour);
}

var rightAnswerFour = function () {
    responseEl.textContent = "Response to Question #4: Correct";
    questionFive ();
}
var wrongAnswerFour = function () {
    responseEl.textContent = "Response to Question #4: Wrong";
    questionFive ();
}

// Fifth Question
var questionFive = function () {
    questionEl.textContent = "Question #5: A very useful tool used during development and debugging for printing content to the debugger is:"
    answerChoiceOne.textContent = "console.log";
    answerChoiceTwo.textContent = "JavaScript";
    answerChoiceThree.textContent = "terminal/bash";
    answerChoiceFour.textContent = "for loops";

    answerChoiceOne.addEventListener("click", rightAnswerFive);
    answerChoiceTwo.addEventListener("click", wrongAnswerFive);
    answerChoiceThree.addEventListener("click", wrongAnswerFive);
    answerChoiceFour.addEventListener("click", wrongAnswerFive);
}

var rightAnswerFive = function () {
    responseEl.textContent = "Response to Question #5: Correct";
    // GameOver ();
}
var wrongAnswerFive = function () {
    responseEl.textContent = "Response to Question #5: Wrong";
    // GameOver ();
}

// Game Over
// var GameOver = function () {}

document.getElementById("start-button").addEventListener("click", beginQuiz);

// do questions and answers need to be stored in array? And if so, are they objects?

// how to connect wrong answer to timer? (remaining time is the score)

// we need to store high scores, as well as initial with the score