var questions = [
    {
        question: "What is the best javascript framework?",
        choices:["react", "angular", "vue", "svelte"],
        answer: "react",
    },
    {
        question: "What tag is the largest?",
        choices:["h3", "h2", "h1", "h4"],
        answer: "h1",
    },
    {
        question: "How many line of code is the longest program?",
        choices:["100 lines", "2 trillion", "77 thousand", "3300 billion lines"],
        answer: "3300 billion lines",
    },
    {
        question: "How do you call a function?",
        choices:["functionName()", "functionName[]", "functionName.call", "functionName{}"],
        answer: "functionName()",
    },
    {
        question: "Can you nest a function, in a funciton ",
        choices: ["Yes", "No"],
        answer: "Yes"
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
                choicesButton.setAttribute("onclick", "wrongAnswer()");
            }
        }


         var answerEl = document.getElementById("true");

        answerEl.addEventListener("click", function(){ 
        var AnswerAttr = answerEl.getAttributeNode("id").value;
            if(AnswerAttr){
                score += 5;
                scoreKeeper.textContent = score;
                generateNextQuestion();
            } else{
                return;
            }
        })

        
    }

    var timeLeft = 30;

//GENERATE NEXT QUESTION FUNCTION
function generateNextQuestion(){
    currentQuestionIndex++;
    if(currentQuestionIndex === questions.length){
        timeLeft = -1;
        document.getElementById("timer-counter").innerHTML = "";

    } else {
    generateQuestion();
    }
}


//RESTART BUTTON FUNCTION

function restart(){
    score = 0;
    scoreKeeper.textContent = score;
    currentQuestionIndex = 0;
    generateQuestion();
    timeLeft = 30;
    startButton.style.display = "";
    document.getElementById("button-placholder").innerHTML = "";
    document.getElementById("question-text").innerHTML = "";
    document.getElementById("game-over").innerHTML = "";
    document.getElementById("coding-title").innerHTML = "Coding Quiz";
    document.getElementById("leaderBoardForm").innerHTML = "";
    
}

function wrongAnswer(){
    var wrongErrorEl = document.createElement("h1");
    wrongErrorEl.textContent = "WRONG!";
    document.getElementById('button-placholder').appendChild(wrongErrorEl);
    score -= 2;
    scoreKeeper.textContent = score;
    timeLeft -= 5;
}


//TIMER AND START BUTTON

startButton.addEventListener("click", function(){
    generateQuestion();
    startButton.style.display = "none";


    var elem = document.getElementById('timer-counter');
    var timerId = setInterval(startTimer, 1000);
    
    function startTimer() {
      if (timeLeft <= -1) {
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
 document.getElementById("game-over").innerHTML = "YOUR QUIZ IS OVER";
 document.getElementById("button-placholder").innerHTML = "";
 document.getElementById("question-text").innerHTML = "";
 document.getElementById("coding-title").innerHTML = "";
 

 //leader board imput
//  var leaderBoardInput = document.createElement("input");
//  var leaderBoardLabel = document.createElement("label");
    
//     document.getElementById("game-over").appendChild(leaderBoardInput);
//     document.getElementById("game-over").appendChild(leaderBoardLabel)
    GFG_Fun();
    
}

// if current question is blank(or at index of 4) then
//set timer to 0
//that will trigger the end game funtions



//generate the ending form
            function GFG_Fun() { 
                
                // Create a form synamically 
                var form = document.createElement("form"); 
                form.setAttribute("method", "post"); 
                form.setAttribute("action", "submit.php"); 
                form.setAttribute("id", "leaderBoardForm"); 
  
                // Create an input element for emailID 
                var ID = document.createElement("input"); 
                ID.setAttribute("type", "text"); 
                ID.setAttribute("name", "Leaderboard"); 
                ID.setAttribute("placeholder", "Enter your initials"); 

                // Create a submit button 
                var s = document.createElement("input"); 
                s.setAttribute("type", "submit"); 
                s.setAttribute("value", "Submit"); 
  
                // Append the email_ID input to the form 
                form.append(ID);  
                
                // Append the button to the form 
                form.append(s);  
  
                document.getElementById("game-over")
               .appendChild(form); 
            }