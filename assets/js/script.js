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
        question: "if you want to create a conditional statement where two variables need to be true to get a result, which of the symbols should be used ?",
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
var questionContainer = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var option1El = document.getElementById("option1");
var option2El = document.getElementById("option2");
var option3El = document.getElementById("option3");
var option4El = document.getElementById("option4");
var validateEl = document.getElementById("validate-answer");
var finalContainer = document.getElementById("final-container");
var scoreEl = document.getElementById("final-score");
var inputEl = document.getElementById("initials");

// Others
var currentQuestion = 0;
var secondsLeft = 100;
var score = 0;
var finalScore;

// Starting Quiz on Click
start.addEventListener("click", setTimer);

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

    var clicked;
    option1El.addEventListener("click", function () {
        clicked = option1El.value;
    })
    option2El.addEventListener("click", function () {
        clicked = option1El.value;
    })
    option3El.addEventListener("click", function () {
        clicked = option1El.value;
    })
    option4El.addEventListener("click", function () {
        clicked = option1El.value;
    })
    // Validates the question 
    if (clicked === "true") {
        validateEl.textContent = "Impressive!";
        validateEl.style.color = "#f0a0cf";
        score++;
    }
    else {
        validateEl.textContent = "False";
        validateEl.style.color = "#6444c3";
        // Code to reduce the time by 10s
        secondsLeft = secondsLeft - 10;
    }

    next();
}

function next() {
    // Need to add a stopping point - 10 questions currentQuestion<9
    if (currentQuestion < challenge.length) {
        changeQuestion(currentQuestion);
    }
    else {
        gameOver();
        // Stops the timer (the timer that I want to stop)
    }

    currentQuestion++;
}



// option2El.addEventListener("click", function () {
//     if (option2El.value === "true") {
//         validateEl.textContent = "Impressive!";
//         validateEl.style.color = "#f0a0cf";
//         score++;
//     }
//     else {
//         validateEl.textContent = "False";
//         validateEl.style.color = "#6444c3";
//         // Code to reduce the time by 10s
//         secondsLeft = secondsLeft - 10;
//     }
// })
// option3El.addEventListener("click", function () {
//     if (option3El.value === "true") {
//         validateEl.textContent = "Impressive!";
//         validateEl.style.color = "#f0a0cf";
//         score++;
//     }
//     else {
//         validateEl.textContent = "False";
//         validateEl.style.color = "#6444c3";
//         // Code to reduce the time by 10s - Fix this
//         secondsLeft = secondsLeft - 10;
//     }
// })
// option4El.addEventListener("click", function () {
//     if (option4El.value === "true") {
//         validateEl.textContent = "Impressive!";
//         validateEl.style.color = "#f0a0cf";
//         score++;
//     }
//     else {
//         validateEl.textContent = "False";
//         validateEl.style.color = "#6444c3";
//         // Code to reduce the time by 10s
//         secondsLeft = secondsLeft - 10;
//     }
// })
// Need something to remove the text context after the question changes





// Starts the quiz and removes the introduction container
function startQuiz() {
    // Change element display to hide it
    introduction.setAttribute("class", "hide");
    // First Question will appear
    questionContainer.setAttribute("class", "show");
    changeQuestion(currentQuestion);
}

// Starts the timer
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
            // Displays the seconds left
            timerEl.textContent = secondsLeft;
        }
        // Computer runs in miliseconds. Every 1s it will do the task. It will update the time every second (1000ms)
    }, 1000);
    // Displays the question container 
    startQuiz()
}


// Function for when the time is up
function gameOver() {
    // So the user can input his/her initials
    finalContainer.setAttribute("class", "show");
    questionContainer.setAttribute("class", "hide");
    scoreEl.textContent = "Your final score is: " + score;
}

// Add Json - local storage