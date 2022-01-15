var startButton = document.querySelector(".start-btn");
var nextButton = document.querySelector(".next-btn")
var startCard = document.querySelector("#start-card");
var questionCard = document.querySelector("#question-card")
var optionButton = document.querySelector("#btn")
var question = document.querySelector("#question")
var choices = document.querySelector("#choices")
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");
var qindex = 0


var questions = [
    {
        title: "Which of the following is an advantage of using JavaScript?",
        choiceA: ["Less server interaction", "Immediate feedback to the visitors", "Increased interactivity", "All of the above."],
        answer: "All of the above."
    },
    {
        title: "Which of the following type of variable is visible only within a function where it is defined?",
        choiceA: ["global variable", "local variable", "local variable", "local variable"],
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

nextButton.onlcick = ()=>{
    if(qindex<= questions.length - 1)
        qindex++;
}
}



    // create for loop
    // create buttons inside for loop
    // append to DOM
    // attach onclick function to each button
    // increment index var inside onclick function
    // call on next question
    // create base case to end quiz




