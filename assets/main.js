var questions = [
    {
        question: "What is the best framework",
        choices:["react", "angular", "vue", "svelte"],
        answer: "react",
    },
    {
        question: "What tag is the largest",
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
            
            if(currentQuestion.choices[i] === currentQuestion.answer){
                choicesButton.setAttribute("id", true);
                choicesButton.setAttribute("class", "rightAnswer")
            } else {
                choicesButton.setAttribute("class", false);
            }
        }


        var answerEl = document.getElementById("true");
        var AnswerAttr = answerEl.getAttributeNode("id").value;

        answerEl.addEventListener("click", function checkAnswer(){ 
            if(AnswerAttr){

       
                generateNextQuestion();
            }
        
        })


    }


function generateNextQuestion(){
    score++;
    currentQuestionIndex++;
    generateQuestion();
    // currentQuestion = questions[currentQuestionIndex];
    // questionEl = document.getElementById("question-text");
    // questionEl.textContent = currentQuestion.question;

    // for(var i = 0; i < currentQuestion.choices.length; i++){
    //     var choicesButton = document.createElement("button");
    //     choicesButton.textContent = i + 1 + ". " + currentQuestion.choices[i]
    //     document.getElementById("button-placholder").appendChild(choicesButton);
        
    //     if(currentQuestion.choices[i] === currentQuestion.answer){
    //         choicesButton.setAttribute("id", true);
    //         choicesButton.setAttribute("class", "rightAnswer")
    //     }
    // }
}


startButton.addEventListener("click", function(){
    generateQuestion();
    startButton.style.display = "none";

    //startTimer();
})


   // // if right answer
    // currentcquestion by 1
    // 



//when start
// call function
//time




// if event.target == answer then -> do this