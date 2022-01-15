var startButton = document.querySelector(".start-btn");
var startCard = document.querySelector("#start-card");
var questionCard = document.querySelector("#question-card")
var optionButton = document.querySelector(".btn")
var question = document.querySelector("#question")
var choices = document.querySelector("#choices")
var index = 0



function clearStatusClass(element){
    element.classList.remove("correct")
    element.classList.remove("wrong")
}
var questions = [
    {
        title: "Which of the following is an advantage of using JavaScript?",
        choiceA: [
            { text: "Less server interaction", correct: false },
            { text: "Immediate feedback to the visitors", correct: false },
            { text: "Increased interactivity", correct: false },
            { text: "All of the above.", correct: true },
        ],
    },
    {
        title: "Which built-in method returns the length of the string?",
        choiceA: [
            { text: "length()", correct: true },
            { text: "size()", correct: false },
            { text: "index()", correct: false },
            { text: "None of the above..", correct: false},
        ],
    },
    {
        title: "Which of the following function of String object combines the text of two strings and returns a new string?",
        choiceA: [
            { text: "add()", correct: false },
            { text: "merge()", correct: false },
            { text: "concat()", correct: true },
            { text: "append()", correct: false },
        ],
    },

]

console.log(startButton);
startButton.addEventListener("click", startQuiz)

function startQuiz() {
    console.log("Hello World!")
    startCard.style.display = "none"
    questionCard.style.display = "block"
    nextQuestion()
}

function nextQuestion() {
    for (var i = 0; i < questions.length; i++) {
        question.textContent = questions[index].title
    }
   
}
    // create for loop
    // create buttons inside for loop
    // append to DOM
    // attach onclick function to each button
    // increment index var inside onclick function
    // call on next question
    // create base case to end quiz




