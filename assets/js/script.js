// do questions and answers need to be stored in array? And if so, are they objects?

// how to connect wrong answer to timer? (remaining time is the score)

containerEl = document.querySelector(".opening-container");
responseEl = document.querySelector(".answer-response");

var timerEl = document.getElementById('timer');
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
var closingContainerEl = document.createElement("div");
var highScoreContainer = document.createElement("div");

// Countdown Timer
var countdown = function() {
    var timeLeft = 75;
    var timeInterval = setInterval(function() {
        if (timeLeft > 0) {
            timerEl.textContent = 'Time: ' + timeLeft;
            timeLeft--;
        }
        else {
            timerEl.textContent = 'Time: 0';
            clearInterval(timeInterval);
            GameOver();
        }
    }, 1000);
}

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
    timeLeft - 10;
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
    GameOver ();
}
var wrongAnswerFive = function () {
    responseEl.textContent = "Response to Question #5: Wrong";
    GameOver ();
}

// Game Over
var GameOver = function () {
    var closingHeaderEl = document.createElement("h1");
    closingHeaderEl.textContent = "All done!";
    closingContainerEl.appendChild(closingHeaderEl);

    var closingCommentEl = document.createElement("p");
    closingCommentEl.className = ("closing-message");
    closingCommentEl.textContent = "Your final score is ...";
    closingContainerEl.appendChild(closingCommentEl);

    var closingFormEl = document.createElement("form");

    enterInitials = document.createElement("p");
    enterInitials.className = ("closing-message");
    enterInitials.textContent = "Enter initials:";
    closingFormEl.appendChild(enterInitials);

    var inputInitials = document.createElement("input");
    inputInitials.className = ("input-form");
    closingFormEl.appendChild(inputInitials);
    var submitButtonEl = document.createElement("button");
    submitButtonEl.className = ("submit-btn");
    submitButtonEl.textContent = "Submit";
    closingFormEl.appendChild(submitButtonEl);

    closingContainerEl.appendChild(closingFormEl);
    quizContainerEl.replaceWith(closingContainerEl);
    
    // figure out way to link initial with timescore and post onto list
    // submitButtonEl.addEventListener("submit", highScore);
}
// High Scores / (list) / Go back (button) Clear high scores (button), preventdefault not working
// High Score
// var highScore = function (event) {
//     event.preventDefault(); 
//     highScoreHeader = document.createElement("h1");
//     highScoreHeader.textContent = "High Scores";
//     highScoreContainer.appendChild.highScoreHeader;

//     closingContainerEl.replaceWith(highScoreContainer);
// }

document.getElementById("start-button").addEventListener("click", countdown);
document.getElementById("start-button").addEventListener("click", beginQuiz);