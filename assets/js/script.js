
// Add event listener to button - do not add the () or it will run the function without the user clicking the button
document.getElementById("start").addEventListener("click", startQuiz)

// Created an array of objects to store all the questions and options that will be displayed in the question-container.
var challenge = [
    // // Objects are a collection of properties, and properties are made up of key-value pairs
    {
        question: "Inside which HTML element do we put the JavaScript?",
        options: ["&ltjavascript&gt", "&ltscript&gt", "&ltlink&gt", "&ltmeta&gt"],
        answer: "&ltscript&gt"
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        options: ["&ltbody&gt", "&ltheader&gt", "&ltfooter&gt", "&ltbody&gt or &lthead&gt"],
        answer: "&ltbody&gt or &lthead&gt"
    },
    {
        question: "What is the best way to get one specific element from the HTML file on JavaScript?",
        options: ["getElementById()", "queryElement()", "getSpecificlElement()", "querySelectorAll()"],
        answer: "getElementById()"
    },
    {
        question: "How do you use an EventListener on JavaScript?",
        options: ["element.eventListener(event,function)", "element.AddEventListener(event,value)", "element.addEventListener(event,function)", "element.EventListener(event,value)"],
        answer: "element.addEventListener(event,function)"
    },
    {
        question: "How do you create a popup box?",
        options: ["window.alert('message')", "prompt('message')", "confirm('message')", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "Which one of the Methods below will return a random number?",
        options: ["element.getRandomNumber()", "Math.random()", "Math.getRandomNumber()", "element.toRandom()"],
        answer: "Math.random()"
    },
    {
        question: "Select the incorrect arithmetic operator",
        options: ["++", "%", "()", "**"],
        answer: "()"
    },
    {
        question: "Arrays must be enclosed within _____ when being assigned to variables.",
        options: ["square bracket", "curly bracket", "double quotes", "parenthesis"],
        answer: "square bracket"
    },
    {
        question: "if you want to create a conditional statement where two variables need to be true to get a result, which of the symbols should be used ?",
        options: ["var1 + var2", "var1 & var2", "var1 || var2", "var1 && var2"],
        answer: "var1 && var2"
    },
    {
        question: "How do you add a comment in JavaScript?",
        options: ["<!--comment-->", "/*comment*/", "**comment", "||comment"],
        answer: "/*comment*/"
    }

];

// Variable Declaration

// Get elements from HTML
var introduction = document.getElementById("introduction");
var timerEl = document.getElementById("timer");
var questionContainer = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var option1El = document.getElementById("option1");
var option2El = document.getElementById("option2");
var option3El = document.getElementById("option3");
var option4El = document.getElementById("option4");
var validateEl = document.getElementById("validateAnswer");
var finalContainer = document.getElementById("final-container");
var scoreEl = document.getElementById("final-score");
var inputEl = document.getElementById("initials");

// Others
var currentQuestion = 0;
var correctAnswer = challenge[currentQuestion].answer;
var secondsLeft = 180;
var score = 0;
var finalScore;


function changeQuestion(currentQuestion) {
    // Displays the question inside the container. I chose innerHTML because of the unicode - textcontext does not read the unicode
    questionEl.textContent = challenge[currentQuestion].question;
    option1El.innerHTML = challenge[currentQuestion].options[0];
    option2El.innerHTML = challenge[currentQuestion].options[1];
    option3El.innerHTML = challenge[currentQuestion].options[2];
    option4El.innerHTML = challenge[currentQuestion].options[3];

    // Validates the question 
    option1El.addEventListener("click", validateQuestion)
    option2El.addEventListener("click", validateQuestion)
    option3El.addEventListener("click", validateQuestion)
    option4El.addEventListener("click", validateQuestion)


    function validateQuestion(answer) {
        // I need to create a function for the option that the user chooses to compare with the correct answer
        if (challenge[currentQuestion].options[answer] === correctAnswer) {
            validateEl.textContent = "Correct!";
            score++;
        }
        else {
            validateEl.innerHTML = "Incorrect! The correct answer is: " + correctAnswer;
            // Code to reduce the time by 10s
        }

        currentQuestion++

        // Need to add a stopping point - 10 questions index<9
        if (currentQuestion < challenge.length) {
            changeQuestion(currentQuestion);
        }
        else {
            gameOver();
        }
    }

}

// Starts the quiz and removes the introduction container
function startQuiz() {
    // Change element display to hide it
    introduction.setAttribute("class", "hide");
    // First Question will appear
    questionContainer.setAttribute("class", "show");
    changeQuestion(currentQuestion);
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
            timerEl.textContent = secondsLeft;
        }
        // Computer runs in miliseconds. Every 1s it will do the task
    }, 1000);
}

// Function for when the time is up
function gameOver() {
    // So the user can input his/her initials
    finalContainer.setAttribute("class", "show");
    questionContainer.setAttribute("class", "hide");
    scoreEl.textContent = "Your final score is: " + score;
}

// Add Json - local storage