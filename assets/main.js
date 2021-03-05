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

document.getElementById("leader-div").style.display = "none";

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

    var timeLeft = 60;

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
    timeLeft = 60;
    startButton.style.display = "";
    document.getElementById("button-placholder").innerHTML = "";
    document.getElementById("question-text").innerHTML = "";
    document.getElementById("game-over").innerHTML = "";
    document.getElementById("coding-title").innerHTML = "Coding Quiz";
    //document.getElementById("leaderboardForm").style.display = "none";

    
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
    document.getElementById("leader-title").style.display = "none";
    document.getElementById("leaderboard").style.display = "none";
    document.getElementById("leaderboardForm").style.display = "none";
    document.getElementById("leader-div").style.display = "none";

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

 
    //GFG_Fun();
    document.getElementById("leaderboardForm").style.display = "block";
    document.getElementById("leader-title").style.display = "block";
    document.getElementById("leaderboard").style.display = "block";
    document.getElementById("leader-div").style.display = "block";
    
}



//generate the ending form
            // function GFG_Fun() { 
                
            //     // Create a form synamically 
            //     var form = document.createElement("form"); 
            //     //form.setAttribute("method", "post"); 

            //     //form.setAttribute("action", "submit.php"); 
            //     form.setAttribute("id", "leaderBoardForm"); 
  
            //     // Create an input element for emailID 
            //     var ID = document.createElement("input"); 
            //     ID.setAttribute("type", "text"); 
            //     ID.setAttribute("name", "Leaderboard"); 
            //     ID.setAttribute("placeholder", "Enter your initials"); 
            //     ID.setAttribute("id", "leaderboardInput"); 

                

            //     // Create a submit button 
            //     var s = document.createElement("input"); 
            //     s.setAttribute("type", "submit"); 
            //     s.setAttribute("value", "Submit"); 
            //     ID.setAttribute("id", "leaderboardSubmit"); 
  
            //     // Append the email_ID input to the form 
            //     form.append(ID);  
                
            //     // Append the button to the form 
            //     form.append(s);  
  
            //     document.getElementById("game-over")
            //    .appendChild(form); 
            // }



//var players = JSON.parse(localStorage.getItem("players"));

            document.addEventListener("click", function(e){
                if(e.target && e.target.id== "leaderboardSubmit"){
                    e.preventDefault();
                    var userData = {
                        initials: "",
                        score: 0
                    }
                    var players = [];
                    userData.initials = document.getElementById("leaderboardInput").value;
                    userData.score = score;

                    //var play = JSON.parse(players)
                    var playersJson = JSON.stringify(players)
                    JSON.parse(window.localStorage.getItem("players"))
                    // console.log(userData)
                    players.push(userData);

                    window.localStorage.setItem("players", playersJson);
                console.log(players)


                    for(var i = 0; i < players.length; i++){
                    var leaderName = document.createElement("h5");
                    var leaderScore = document.createElement("h6");

                    leaderName.textContent = players[i].initials;
                    leaderScore.textContent = players[i].score;

                    document.getElementById("leaderboard").appendChild(leaderName); 
                    document.getElementById("leaderboard").appendChild(leaderScore); 
                    

                    }
                    document.getElementById("leaderboardForm").reset();
                    document.getElementById("leaderboardForm").style.display = "none";
                    restart();
                    
                }
            });

