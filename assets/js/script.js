var startButton = document.querySelector(".start-btn");
var nextButton = document.querySelector(".next-btn");
var startCard = document.querySelector("#start-card");
var questionCard = document.querySelector("#question-card")
var optButton = document.querySelectorAll(".btn")
var question = document.querySelector("#question")
var choices = document.querySelector("#choices");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");
var currentTime = document.querySelector("#current-time");
var timeCount = document.querySelector(".timer");
var points = 0
var qindex = 0



function startCounter(seconds){
    let timeCount = seconds;

    const interval = setInterval(() => {
        console.log(timeCount);
        timeCount--;

        if (timeCount < 0) {
            clearInterval(interval);
            allDone_();
            currentTime.textContent = "Time's up!";
        }

        currentTime.textContent="Time:" + timeCount;

    }, 1000)
}

startCounter(5);

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

console.log(startButton);
startButton.addEventListener("click", startQuiz)

function startQuiz() {
    console.log("Hello World!")
    startCard.style.display = "none"
    questionCard.style.display = "block"
    nextQuestion()
}

function nextQuestion() {
 question.textContent = questions[qindex].title
 option1.textContent = questions[qindex].choiceA[0]
 option2.textContent = questions[qindex].choiceA[1]
 option3.textContent = questions[qindex].choiceA[2]
 option4.textContent = questions[qindex].choiceA[3]

}

console.log(optButton)
optButton.forEach(button=>{
    button.addEventListener("click", function(event){
        console.log(this.textContent)
        if (this.textContent === questions[qindex].answer) {
            console.log(true)
            points++
            console.log(points)
            qindex++
        nextQuestion()
        }
        
    })
})


optButton[questions].addEventListener("click", () => {
        if (answer === "true") {
            console.log(true);s
        answer[questions].innerHTML = "Correct";
        answer[questions],style.color = "green";
        } else {
            answer[questions].innerHTML = "Wrong";
            answer[questions],style.color = "red"; 
        }
})



    // create for loop
    // create buttons inside for loop
    // append to DOM
    // attach onclick function to each button
    // increment index var inside onclick function
    // call on next question
    // create base case to end quiz

