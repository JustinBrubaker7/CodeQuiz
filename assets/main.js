var questions = [
    {
        question: "What is the best framework",
        choices:["react", "angular", "vue", "svelte"],
        answer: "react",
    },
    {
        question: "What tag is availabe",
        choices:["h1", "h2", "h3", "h4"],
        answer: "react",
    },
    {
        question: "What is the best framework",
        choices:["react", "angular", "vue", "svelte"],
        answer: "react",
    },
    {
        question: "What is the best framework",
        choices:["react", "angular", "vue", "svelte"],
        answer: "react",
    }
];

var currentQuestionIndex = 0;
var startButton = document.getElementById("start-button");

function generateQuestion(){
    //var currentQuestion = questions[currentQuestionIndex];
    var questionEl = document.getElementById("question-text");
    var choice1 = document.getElementById("choice1");
    var choice2 = document.getElementById("choice2");
    var choice3 = document.getElementById("choice3");
    var choice4 = document.getElementById("choice4");


    for(var i = 0; i < questions.length; i++){
    questionEl.textContent = questions[i].question;
    choice1.textContent = questions[i].choices[0];
    choice2.textContent = questions[i].choices[1];
    choice3.textContent = questions[i].choices[2];
    choice4.textContent = questions[i].choices[3];
    }

    // if right answer
    // currentquestion by 1
    // 
    if()


}

startButton.addEventListener("click", function(){
    generateQuestion();
    startTimer();
})

//when start
// call function
//time
