var questions = [
    {
        question: "What is the best framework?",
        choices:["react", "angular", "vue", "svelte"],
        answer: "react",
    },
    {
        question: "What tag is the largest?",
        choices:["h1", "h2", "h3", "h4"],
        answer: "h1",
    },
    {
        question: "How many line of code is the longest program?",
        choices:["3300 billion lines", "100 lines", "2 trillion", "77 thousand"],
        answer: "3300 billion lines",
    },
    {
        question: "How do you call a function?",
        choices:["functionName()", "functionName[]", "functionName.call", "functionName{}"],
        answer: "functionName()",
    }
];

var currentQuestionIndex = 0;
var buttonDiv = document.getElementById("button-placholder")

var startButton = document.getElementById("start-button");

var score = 0;
var scoreKeeper = document.getElementById("score");
scoreKeeper.textContent = score;

//Generate question function
function generateQuestion(){
    var currentQuestion = questions[currentQuestionIndex];
    var questionEl = document.getElementById("question-text");
    questionEl.textContent = currentQuestion.question;
    document.getElementById("button-placholder").innerHTML = "";

        for(var i = 0; i < currentQuestion.choices.length; i++){
            var choicesButton = document.createElement("button");
            choicesButton.textContent = i + 1 + ". " + currentQuestion.choices[i];
            document.getElementById("button-placholder").appendChild(choicesButton);
            
            if(currentQuestion.choices[i] === currentQuestion.answer){
                choicesButton.setAttribute("id", true);
                choicesButton.setAttribute("class", "rightAnswer")
            } else {
                choicesButton.setAttribute("class", false);
            }
        }


         var answerEl = document.getElementById("true");

        answerEl.addEventListener("click", function(){ 
        var AnswerAttr = answerEl.getAttributeNode("id").value;
            if(AnswerAttr){
                generateNextQuestion();
            }
        })


    }


function generateNextQuestion(){
    score += 5;
    scoreKeeper.textContent = score;
    currentQuestionIndex++;
    generateQuestion();
}

startButton.addEventListener("click", function(){
    generateQuestion();
    startButton.style.display = "none";

    //TODO : startTimer();
})



// if event.target == answer then -> do this