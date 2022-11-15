// Variable Declaration

// Created an array of objects to store all the questions and options that will be displayed in the question-container.
var challenge = [
    // // Objects are a collection of properties, and properties are made up of key-value pairs
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
// Add event listener to button - do not add the () or it will run the function without the user clicking the button
var start = document.getElementById("start");
var timerEl = document.getElementById("timer");

var introduction = document.getElementById("introduction");

var questionContainer = document.getElementById("question-section");
// var optionsContainer = document.getElementsByClassName("question-options");
var questionEl = document.getElementById("question");
var option1El = document.getElementById("option1");
var option2El = document.getElementById("option2");
var option3El = document.getElementById("option3");
var option4El = document.getElementById("option4");

var answerContainer = document.getElementsByClassName("question-answer")
var answerEl = document.getElementById("answer-check");
var curQuestionEl = document.getElementById("current-question");
var finalContainer = document.getElementById("final-container");
var scoreEl = document.getElementById("final-score");
var inputEl = document.getElementById("initials");
var finalBtn = document.getElementById("final-btn");

var highscoresContainer = document.getElementById("highscores");

// Others
var currentQuestion = 0;
// Had to add 1 seconds because it only starts to show the timer after 1s
var secondsLeft = 101;
var score = 0;
var finalScore;

// // Starting Quiz on Click

// Starts the timer
function setTimer() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        // Decrementing
        secondsLeft--;
        // Displays the seconds left
        timerEl.textContent = secondsLeft;
        // When time is over or the user answers eveyrthing - clear interval so the time does not turn negative
        if (secondsLeft === 0 || currentQuestion > challenge.length) {
            // Stops the timer (the timer that I want to stop)
            clearInterval(timerInterval);
            // Calls function for when the time is up
            gameOver();
        }
        // Computer runs in miliseconds. Every 1s it will do the task. It will update the time every second (1000ms)
    }, 1000);
    // Displays the question container 
    startQuiz(0)
}

// Starts the quiz and removes the introduction container
function startQuiz(currentQuestion) {
    // Change element display to hide it
    introduction.setAttribute("class", "hide");
    // First Question will appear
    questionContainer.setAttribute("class", "show");
    changeQuestion(currentQuestion);
}

function changeQuestion(currentQuestion) {
    // Displays the question inside the container. I chose text content because innerHTML thinks <> is an element even though is inside strings
    questionEl.textContent = challenge[currentQuestion].question;
    option1El.textContent = challenge[currentQuestion].options[0].text;
    option2El.textContent = challenge[currentQuestion].options[1].text;
    option3El.textContent = challenge[currentQuestion].options[2].text;
    option4El.textContent = challenge[currentQuestion].options[3].text;

    // Providing the true or false value to the options
    option1El.value = challenge[currentQuestion].options[0].isCorrect;
    option2El.value = challenge[currentQuestion].options[1].isCorrect;
    option3El.value = challenge[currentQuestion].options[2].isCorrect;
    option4El.value = challenge[currentQuestion].options[3].isCorrect;

    // Current question display
    curQuestionEl.innerHTML = currentQuestion + 1;
}

// Try event target to reduce this code

// var optionsClick = document.getElementsByClassName("question-options")
// Have to add this function to make sure it will only check for the button, not the rest of the container
// use matches.
// optionsClick.addEventListener("click", function(event){
// var clickedEl = event.target
// if (clickedEl.matches("button")){
// var state = element.getAttribute("data-state")
// }
// if (state === "hidden") {
//     element.dataset.state = "visible";
// }
//     if (clickedEl.value === "true"){
//         isRight();
//     }
//     else {
//         isWrong();
//     }
// })
// function loadQuestions(numberOfOptions) {
//     for (var i = 0; i < numberOfOptions; i++) {
//         console.log('Generate options: ${i}')
//         optionsContainer.innerHTML += '<button id="option${1}" class="btn" onclick="selectedAns1(); next()"></button>'
//     }
// }

// Validates the question 
function selectedAns1() {
    if (option1El.value === "true") {
        isRight();
    }
    else {
        isWrong();
    }
}
function selectedAns2() {
    if (option2El.value === "true") {
        isRight();
    }
    else {
        isWrong();
    }
}
function selectedAns3() {
    if (option3El.value === "true") {
        isRight();
    }
    else {
        isWrong();
    }
}
function selectedAns4() {
    if (option4El.value === "true") {
        isRight();
    }
    else {
        isWrong();
    }
}

// Displays answer
function isRight() {
    answerEl.textContent = "Impressive!";
    answerEl.style.color = "#f0a0cf";
    score++;
}
function isWrong() {
    answerEl.textContent = "False";
    answerEl.style.color = "#6444c3";
    // Code to reduce the time by 10s
    if (secondsLeft >= 10) {
        secondsLeft = secondsLeft - 10;
    }
    // TODO add code to make sure the time will not go negative
    // Code to reduce score
    if (score > 0) {
        score--;
    }
}

next();

function next() {
    // Need to add a stopping point - 10 questions currentQuestion<9
    if (currentQuestion < challenge.length) {
        changeQuestion(currentQuestion);
    }

    currentQuestion++;
}

// Need something to remove the text context after the question changes

// Function for when the time is up
function gameOver() {
    // So the user can input his/her initials
    finalContainer.setAttribute("class", "show");
    questionContainer.setAttribute("class", "hide");
    scoreEl.textContent = "Your final score is: " + score;
    finalBtn.addEventListener("click", function () {
        if (inputEl.value === "") {
            alert("Please enter your initials!");
        }
        else {
            storedData();
        }
    });
}


var userData = {
    userInitials: localStorage.setItem("initials", inputEl.value),
    userScore: localStorage.setItem("final-score", score),
    storedData: function () {
        return this.userInitials + ":" + this.userScore;
    }
}

var setHighScores = localStorage.setItem("highscores", storedData);

// TODO fix highcore section
function displayHighScore() {
    introduction.setAttribute("class", "hide");
    finalContainer.setAttribute("class", "hide");
    questionContainer.setAttribute("class", "hide");
    highscoresContainer.setAttribute("class", "show");

    var savedHighScores = localStorage.getItem("highscores");
    setHighScores = JSON.parse(savedHighScores);

    for (i = 0; i < setHighScores.length; i++) {
        var pTag = document.createElement("p");
        pTag.innerHTML = storedData;
        highscoresContainer.appendChild(pTag);
    }

    console.log(savedHighScores);
}