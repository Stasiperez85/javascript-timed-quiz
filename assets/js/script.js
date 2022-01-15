var startButton = document.querySelector(".start-btn");
var startCard = document.querySelector("#start-card");
var questionCard = document.querySelector("#question-card")
var question = document.querySelector("#question")
var optionAnswer =  document.querySelector(".option-text")
var index = 0


var questions = [{
    title: "Which of the following best describes a Web API?",
    choices: ["Web APIs are built into your web browser and contain methods that allow us to manipulate a web page via JavaScript.",
     "Web APIs are built into your web browser and contain methods that allow us to manipulate a web page via JavaScript.", 
     "Web APIs are not built into the browser by default, and you generally have to retrieve their code and information from somewhere on the Web.", 
     "Web APIs are low level code (say C or C++) that directly control the computer's GPU or other graphics functions."],
    answer: "Web APIs are built into your web browser and contain methods that allow us to manipulate a web page via JavaScript."
}, {
    title: "What value would we add to setInterval() if we want a function called, myTimer() to run every 3 seconds? ",
    choices: ["setInterval(myTimer, 3)", "setInterval(myTimer, 30)", "setInterval(myTimer, 3000)", "setInterval(myTimer, 300)"],
    answer: "setInterval(myTimer, 3000)"
}, {
    title: "Which property can you use in order to implement event delegation?",
    choices: ["event.target", "event.preventDefault()", "event.stopPropagation()", "event.addEventListener()"],
    answer: "event.target"
}]

console.log(startButton);
startButton.addEventListener("click", startQuiz)

function startQuiz() {
    startCard.style.display = "none"
    questionCard.style.display = "block"
    nextQuestion()
}

function nextQuestion() {
    for (var i = 0; i < questions.length; i++) {
        question.textContent = questions[index].title;
        optionAnswer.textContent =  questions[index].choices
    
        }
        
    }

    // create for loop
    // create buttons inside for loop
    // append to DOM
    // attach onclick function to each button
    // increment index var inside onclick function
    // call on next question
    // create base case to end quiz
