
// Add event listener to button - do not add the () or it will run the function without the user clicking the button
document.getElementById("start").addEventListener("click", startQuiz)

// Objects are a collection of properties
// Should I put each container in one var or put all the questions inside the same var?
var challenge = [
    // Properties are made up of key-value pairs
    {
        question: "Inside which HTML element do we put the JavaScript?",
        options: ["&ltjavascript&gt", "&ltscript&gt", "&ltlink&gt", "&ltmeta&gt"],
        answer: "&ltscript&gt"
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        options: ["&ltbody&gt", "&ltheader&gt", "&ltfooter&gt", "&ltbody&gt or &lthead&gt"],
        answer: "&ltbody&gt or &lthead&gt"
    }
];

// Variable Declaration
var introduction = document.getElementById("introduction")
var questionContainer = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var option1El = document.getElementById("option1");
var option2El = document.getElementById("option2");
var option3El = document.getElementById("option3");
var option4El = document.getElementById("option4");
var validateEl = document.getElementById("validateAnswer");
var currentQuestion = 0;
var correctAnswer = challenge[currentQuestion].answer;


function changeQuestion(currentQuestion) {
    // Displays the question inside the container
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
        if (challenge[currentQuestion].options[answer] === correctAnswer) {
            validateEl.textContent = "Correct!";
        }
        else {
            validateEl.innerHTML = "Incorrect! The correct answer is: " + correctAnswer;
        }

        currentQuestion++

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


// Text content

// onclick - increase the index by 1 so that it jumps to the next question!
// Need to add a stopping point - 10 questions index<9

// Code to reduce the time by 10s


// // Timer functions - should I put inside the other function?
// function setTimer() {
//     // Sets interval in variable
//     var timerInterval = setInterval(function () {
//         // When time is over - clear interval so the time does not turn negative
//         if (secondsLeft === 0) {
//             // Stops the timer (the timer that I want to stop)
//             clearInterval(timerInterval);
//             // Calls function for when the time is up
//             gameOver()
//         }
//         else {
//             // Decrementing
//             secondsLeft--;
//             startTime.textContent = secondsLeft;
//         }
//         // Computer runs in miliseconds. Every 1s it will do the task
//     }, 1000);
// }


// Function for when the time is up
function gameOver() {
    var inputEl = document.getElementById("username-container");
    // So the user can input his/her initials
    inputEl.setAttribute("class", "show");

    // Add score
}

// Add Json - local storage