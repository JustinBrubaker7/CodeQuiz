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
    },
    {
        question: "",
        choices: "",
        answer: ""
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
                choicesButton.setAttribute("class", "false");
            }
        }


         var answerEl = document.getElementById("true");

        answerEl.addEventListener("click", function(){ 
        var AnswerAttr = answerEl.getAttributeNode("id").value;
            if(AnswerAttr){
                generateNextQuestion();
            } else{
                return;
            }
        })


    }



function generateNextQuestion(){
    score += 5;
    scoreKeeper.textContent = score;
    currentQuestionIndex++;
    generateQuestion();
}


//subtract score function and error notification for wrong answer

// function subtractScore(){
//     var wrongAnswerEL = document.getElementsByClassName("false");

//     wrongAnswerEL.addEventListener("click", function(){ 
//         var wrongAnswerAtt = wrongAnswerEL.getAttributeNode("class").value;
//             if(wrongAnswerAtt.event.target.value){
//                 alert("wrong answer")
//             } 
//         })
//         console.log(wrongAnswerAtt)
        

// }








startButton.addEventListener("click", function(){
    generateQuestion();
    startButton.style.display = "none";

    var timeLeft = 3;
    var elem = document.getElementById('timer-counter');
    var timerId = setInterval(startTimer, 1000);
    
    function startTimer() {
      if (timeLeft == -1) {
        clearTimeout(timerId);
        doSomething();
      } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
      }
    }
    startTimer();
})

function doSomething(){
 document.getElementById("game-over").innerHTML = "Game Over";
 document.getElementById("button-placholder").innerHTML = "";
 document.getElementById("question-text").innerHTML = "";
}