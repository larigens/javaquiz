
// Add event listener to button
document.getElementById("start").addEventListener("click", gameOver())

// Timer
var startTime = document.getElementById("timer");
var secondsLeft = 180;

// Series of questions
function startQuiz() {
    // First Question
    var firstQuestion = document.getElementById("first-question");
    var introduction = document.getElementById("introduction");
    // Change element class to show/hide
    firstQuestion.setAttribute("class", "show");
    // This is making the intro disappear before the button is clicked
    // introduction.setAttribute("class", "hide");
    if (firstQuestion) {
        firstQuestion.removeAttribute("class", "show");
        firstQuestion.setAttribute("class", "hide");
        var secondQuestion = document.getElementById("second-question");
        secondQuestion.setAttribute("class", "show");
    }
    else if (!firstQuestion) {
        // Code to reduce the time by 30s
    }
}

// Timer functions - should I put inside the other function?
function setTimer() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        // When time is over - clear interval so the time does not turn negative
        if (secondsLeft === 0) {
            // Stops the timer (the timer that I want to stop)
            clearInterval(timerInterval);
            // Calls function for when the time is up
            gameOver()
        }
        else {
            // Decrementing
            secondsLeft--;
            startTime.textContent = secondsLeft;
        }
        // Computer runs in miliseconds. Every 1s it will do the task
    }, 1000);
}


// Function for when the time is up
function gameOver() {
    var gameResult = startQuiz();
    var inputEl = document.createElement("input");
    // So the user can input his/her initials
    inputEl.setAttribute("type", "text");
    var buttonEl = document.createElement("button");
    buttonEl.setAttribute("type", "submit");
    var mainEl = document.getElementById("main");
    mainEl.appendChild(inputEl);
    mainEl.appendChild(buttonEl);
    // Add score
}

// Add Json - local storage