var startButton = document.querySelector(".start-btn");
var nextButton = document.querySelector(".next-btn");
var startCard = document.querySelector("#start-card");
var questionCard = document.querySelector("#question-card")
var resultsCard = document.querySelector("#results-card")
var optButton = document.querySelectorAll(".btn")
var question = document.querySelector("#question")
var choices = document.querySelector("#choices");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");
var currentTime = document.querySelector("#current-time");
var timeCount = document.querySelector(".timer");
var saveScore = document.querySelector("#save-btn");
var points = 0
var qindex = 0
var timer = 30

// Questions and Answers arrary for quiz
var questions = [
    {
        title: "Which of the following is an advantage of using JavaScript?",
        choiceA: ["Less server interaction", "Immediate feedback to the visitors", "Increased interactivity", "All of the above."],
        answer: "All of the above."
    },
    {
        title: "Which of the following type of variable is visible only within a function where it is defined?",
        choiceA: ["global variable", "local variable", "whole variable", "All the above"],
        answer: "local variable"
    },
    {
        title: "Which built-in method sorts the elements of an array?",
        choiceA: ["changeOrder(order)", "order()", "sort()", "None of the above."],
        answer: "sort()"
    },
]

// Start quiz
startButton.addEventListener("click", startQuiz)

// Remove intro part and move to quiz part
function startQuiz() {
    startCard.style.display = "none"
    questionCard.style.display = "block"
    nextQuestion()
    startCounter(30);
}

// Function to make questions and answer appear
function nextQuestion() {
    question.textContent = questions[qindex].title
    option1.textContent = questions[qindex].choiceA[0]
    option2.textContent = questions[qindex].choiceA[1]
    option3.textContent = questions[qindex].choiceA[2]
    option4.textContent = questions[qindex].choiceA[3]

}

// Accessing question/answer array to make next one appear
console.log(optButton)
optButton.forEach(button => {
    button.addEventListener("click", function (event) {
        console.log(this.textContent)
        if (this.textContent === questions[qindex].answer) {
            console.log(true)
            points++
            console.log(points)
            qindex++
        }

        nextQuestion()
    })
})

// Timer counter and going to highscore page
function startCounter(seconds) {
    let timeCount = seconds;

    const timer = setInterval(() => {
        console.log(timeCount);
        timeCount--;
        currentTime.textContent = "Time:" + timeCount;
        if (timeCount === 0) {
            clearInterval(timer);
            alert("Time's up!")
            location.href = "./highscore.html"
        }
    }, 1000)
}






