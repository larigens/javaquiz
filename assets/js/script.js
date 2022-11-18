// Variable Declaration

// Created an array of objects to store all the questions and options that will be displayed in the question container.
var challengeQuiz = [
    // Objects are a collection of properties and properties are made up of key-value pairs.
    {
        question: "Inside which HTML element do we put the JavaScript?",
        options: [
            { text: "<javascript>", isCorrect: false },
            { text: "<script>", isCorrect: true },
            { text: "<link>", isCorrect: false },
            { text: "<meta>", isCorrect: false }
        ],
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        options: [
            { text: "<body>", isCorrect: false },
            { text: "<header>", isCorrect: false },
            { text: "<footer>", isCorrect: false },
            { text: "<body> or <head>", isCorrect: true }
        ],
    },
    {
        question: "What is the best way to get one specific element from the HTML file on JavaScript?",
        options: [
            { text: "getElementById()", isCorrect: true },
            { text: "queryElement()", isCorrect: false },
            { text: "getSpecificlElement()", isCorrect: false },
            { text: "querySelectorAll()", isCorrect: false }
        ],
    },
    {
        question: "How do you use an EventListener on JavaScript?",
        options: [
            { text: "element.eventListener(event,function)", isCorrect: false },
            { text: "element.AddEventListener(event,value)", isCorrect: false },
            { text: "element.addEventListener(event,function)", isCorrect: true },
            { text: "element.EventListener(event,value)", isCorrect: false }
        ]
    },
    {
        question: "How do you create a popup box?",
        options: [
            { text: "window.alert('message')", isCorrect: false },
            { text: "prompt('message')", isCorrect: false },
            { text: "confirm('message')", isCorrect: false },
            { text: "All of the above", isCorrect: true }
        ]
    },
    {
        question: "Which one of the Methods below will return a random number?",
        options: [
            { text: "element.getRandomNumber()", isCorrect: false },
            { text: "Math.random()", isCorrect: true },
            { text: "Math.getRandomNumber()", isCorrect: false },
            { text: "element.toRandom()", isCorrect: false }
        ]
    },
    {
        question: "Select the incorrect arithmetic operator",
        options: [
            { text: "++", isCorrect: false },
            { text: "%", isCorrect: false },
            { text: "()", isCorrect: true },
            { text: "**", isCorrect: false }
        ]
    },
    {
        question: "Arrays must be enclosed within _____ when being assigned to variables.",
        options: [
            { text: "square bracket", isCorrect: true },
            { text: "curly bracket", isCorrect: false },
            { text: "double quotes", isCorrect: false },
            { text: "parenthesis", isCorrect: false }
        ]
    },
    {
        question: "If you want to create a conditional statement where two variables need to be true to get a result, which of the symbols should be used ?",
        options: [
            { text: "var1 + var2", isCorrect: false },
            { text: "var1 & var2", isCorrect: false },
            { text: "var1 || var2", isCorrect: false },
            { text: "var1 && var2", isCorrect: true }
        ]
    },
    {
        question: "How do you add a comment in JavaScript?",
        options: [
            { text: "<!--comment-->", isCorrect: false },
            { text: "/*comment*/", isCorrect: true },
            { text: "**comment", isCorrect: false },
            { text: "||comment", isCorrect: false }
        ]
    }

];

// Get elements from HTML

// Highscores Section Elements
var highscoresContainer = document.getElementById("highscores");
var highscoreEl = document.getElementById("display-score");

// Timer Section Elements
var timerEl = document.getElementById("timer");

// Introduction Section Elements
var introductionContainer = document.getElementById("introduction");
var startBtn = document.getElementById("start");
// Added event listener to button - the function will only be executed after the user clicks the button.
startBtn.addEventListener("click", setTimer);

// Questions Section Elements
var questionContainer = document.getElementById("question-section");
var questionEl = document.getElementById("question");
var optionsContainer = document.getElementById("question-options");
var option1El = document.getElementById("option1");
var option2El = document.getElementById("option2");
var option3El = document.getElementById("option3");
var option4El = document.getElementById("option4");
var answerEl = document.getElementById("answer-check");
var currentQuestionEl = document.getElementById("current-question");

// Final Section Elements
var finalContainer = document.getElementById("final-container");
var scoreEl = document.getElementById("final-score");
var inputEl = document.getElementById("initials");
var finalBtn = document.getElementById("final-btn");

// Other Variables
var secondsLeft = 100;
var currentQuestion = 0;
var score = 0;

// Starting Quiz on Click - Starts the timer.
function setTimer() {
    timerEl.setAttribute("class", "show");
    // Sets interval in variable.
    var timerInterval = setInterval(function () {
        // Decrementing.
        secondsLeft--;
        // Displays the remaining seconds.
        timerEl.textContent = secondsLeft;
        // When the time is up or when the user answers all the questions - clear interval so that the time does not become negative.
        if (secondsLeft === 0 || currentQuestion > challengeQuiz.length) {
            // Stops the timer (the timer/var I want to stop).
            clearInterval(timerInterval);
            // Calls the function for when time is up.
            gameOver();
        }
        // The computer runs in milliseconds. Every 1s it will do the task - It will update the time every second (1000ms).
    }, 1000);
    // Displays the question container and hides the introduction container.
    introductionContainer.setAttribute("class", "hide");
    questionContainer.setAttribute("class", "show section");
    renderQuestions(currentQuestion);
    // It will increment the question number to keep updating the container.
    currentQuestion++;
}

function renderQuestions(index) {
    // Sets the timer to show the answer element for only 1.2s;
    setInterval(function () {
        answerEl.textContent = "";
    }, 1200);
    // Displays the question inside the container. I chose text content because innerHTML thinks that <> is an element even though it is inside strings.
    questionEl.textContent = challengeQuiz[index].question;
    option1El.textContent = challengeQuiz[index].options[0].text;
    option2El.textContent = challengeQuiz[index].options[1].text;
    option3El.textContent = challengeQuiz[index].options[2].text;
    option4El.textContent = challengeQuiz[index].options[3].text;

    // Provide true or false value to the options.
    option1El.value = challengeQuiz[index].options[0].isCorrect;
    option2El.value = challengeQuiz[index].options[1].isCorrect;
    option3El.value = challengeQuiz[index].options[2].isCorrect;
    option4El.value = challengeQuiz[index].options[3].isCorrect;

    // Displays the current question number.
    currentQuestionEl.innerHTML = index + 1;
}

// Validates the question 
optionsContainer.addEventListener("click", function (event) {
    var clickedEl = event.target;
    // Had to add .matches to ensure that it will only check if the button has been clicked.
    if (clickedEl.matches(".btn") && clickedEl.value === "true") {
        answerEl.textContent = "Impressive!";
        answerEl.style.color = "#f0a0cf";
        score++;
    }
    else if (clickedEl.matches(".btn") && clickedEl.value === "false") {
        answerEl.textContent = "Maybe next time!";
        answerEl.style.color = "#6444c3";
        // Reduces time by 10s.
        if (secondsLeft >= 10) {
            secondsLeft = secondsLeft - 10;
        }
        // Reduces one point from the score.
        if (score > 0) {
            score--;
        }
    }
    nextQuestion();
}
);

function nextQuestion() {
    // Need to add a breakpoint.
    if (currentQuestion < challengeQuiz.length) {
        renderQuestions(currentQuestion);
    }
    currentQuestion++;
}

// Function for when time is up.
function gameOver() {
    finalContainer.setAttribute("class", "show section");
    questionContainer.setAttribute("class", "hide");
    scoreEl.textContent = "Your final score is: " + score;
    finalBtn.addEventListener("click", function () {
        if (inputEl.value === "") {
            alert("Please enter your initials!");
            // Added return so that the score is not saved without the initials.
            return;
        }
        else if (inputEl.value !== null) {
            storeData();
        }
    });
}

// If there is no saved score, then renders an empty array.
var highScores = JSON.parse(localStorage.getItem("highscores")) || [];

function storeData() {
    var userData = {
        userInitials: inputEl.value,
        userScore: score
    }
    // Saves the data in the highscore array.
    highScores.push(userData);

    // Need to convert the object to a string before storing it, or it'll return [object, object].
    localStorage.setItem("highscores", JSON.stringify(highScores));

    renderHighScores();
}


function renderHighScores() {
    // To not overwrite the stored data.
    highscoreEl.innerHTML = "";
    timerEl.setAttribute("class", "hide");
    introductionContainer.setAttribute("class", "hide");
    questionContainer.setAttribute("class", "hide");
    finalContainer.setAttribute("class", "hide");
    highscoresContainer.setAttribute("class", "show section");

    // Creates a new element for each new data and attaches it to the container.
    for (i = 0; i < highScores.length; i++) {
        var pTag = document.createElement("p");
        pTag.textContent = highScores[i].userInitials + ': ' + highScores[i].userScore;
        highscoreEl.appendChild(pTag);
    }
}

function backTo() {
    introductionContainer.setAttribute("class", "show section");
    questionContainer.setAttribute("class", "hide");
    finalContainer.setAttribute("class", "hide");
    highscoresContainer.setAttribute("class", "hide");
}