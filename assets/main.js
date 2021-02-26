var questions = [
    {
        question: "What is the best framework",
        choices:["react", "angular", "vue", "svelte"],
        answer: "react",
    },
    {
        question: "What tag is availabe",
        choices:["h1", "h2", "h3", "h4"],
        answer: "h1",
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
var buttonDiv = document.getElementById("button-placholder")

var startButton = document.getElementById("start-button");
var correctAnswer = document.getElementById("1");

var score = 0;
var scoreKeeper = document.getElementById("score");
scoreKeeper.textContent = score;

//Generate question function
function generateQuestion(){
    var currentQuestion = questions[currentQuestionIndex];
    var questionEl = document.getElementById("question-text");
    questionEl.textContent = currentQuestion.question;


        for(var i = 0; i < currentQuestion.choices.length; i++){
            var choicesButton = document.createElement("button");
            choicesButton.textContent = i + 1 + ". " + currentQuestion.choices[i]
            document.getElementById("button-placholder").appendChild(choicesButton);
            choicesButton.setAttribute("id", currentQuestion.choices[i])
        }
        checkAnswer();

    }



function checkAnswer(event){ 
    if(event.target.value == currentQuestion.answer){
        currentQuestionIndex++
        score++
        generateNextQuestion();
        button.style.color = "red";
    }

}




function generateNextQuestion(){
    currentQuestion = questions[currentQuestionIndex];
    questionEl = document.getElementById("question-text");
    questionEl.textContent = currentQuestion.question;
}


startButton.addEventListener("click", function(){
    generateQuestion();
    startButton.style.display = "none";

    //startTimer();
})


   // // if right answer
    // currentquestion by 1
    // 



//when start
// call function
//time




// if event.target == answer then -> do this