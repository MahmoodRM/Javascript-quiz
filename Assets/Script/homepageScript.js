// Variables
var quizScreen = document.getElementById("quizscreen");
var saveScreen = document.getElementById("savescreen");
var introScreen = document.getElementById("intro");
var quizStart = document.getElementById("startBtn");
var timer = document.getElementById("timedisplay");
var highscores = document.getElementById("scorelink");
var scoretracker = document.getElementById("scoredisplay")
var question = document.getElementById("question");
var options = document.querySelectorAll(".choice-option");
var score = document.getElementById("score")
var answer = document.getElementById("choice-box")
var seconds=60
var figure = "0"
var questions1 = {
    question: "console.log() is a method that prints meassages to where?",
    choice1: "The Html",
    choice2: "The Console",
    choice3: "The Homepage screen",
    choice4: "The root element",
    answer: 2,
}
var questions2 = {
    question: "Given 'students' is the name of a variable, how would you view its values datatype?",
    choice1: "console.log(typeof students)",
    choice2: "console.log(datatype students)",
    choice3: "datatype.student;",
    choice4: "typeof.students;",
    answer: 1,
}
var questions3 = {
    question: "To print the 3rd value of the array 'students' in the console, what would you use?",
    choice1: "console.log(studesnts[3])",
    choice2: "console.log(studesnts[2])",
    choice3: "studesnts[2];",
    choice4: "studesnts[3].value;",
    answer: 2,
} 
var questions4 = {
    question: "'document.querySelector(<p>)' would do which of the following?",
    choice1: "Change the value of all p elements",
    choice2: "Change the value of the first p element",
    choice3: "Select all p elements in the body",
    choice4: "Select the first p element in the body",
    answer: 4,
} 


function displayScore() {
    score.textContent = figure

}

// Init function for page load up 

init();

function init () {
    quizScreen.style.display = "none";
    saveScreen.style.display = "none";
    timer.style.display = "none";
    scoretracker.style.display= "none"
    figure = 0
}

// Start button for the quiz to start 

quizStart.addEventListener("click", function(event){
    
    introScreen.style.display = "none";
    quizScreen.style.display = "block";
    timer.style.display = "block";
    scoretracker.style.display= "block";
    highscores.style.display = "none";

    displayScore();

    // functionality to timer

    var secDown = setInterval(function secondDown(){
    
    if(seconds <= 60) { 
        timer.textContent ="Timer: " + seconds;
      }
      if (seconds >0 ) { 
         seconds--;
      } else {
         clearInterval(secDown);
      }
    },1000)

    addQuestion1();

})

// Displays saving screen

function displaySaveScreen (){
    introScreen.style.display = "none";
    quizScreen.style.display = "none";
    timer.style.display = "none";
    scoretracker.style.display= "none";
    highscores.style.display = "none";
    saveScreen.style.display = "block";
}


// Adding questions function

function addQuestion1 (){

    question.textContent=questions1.question
    options[0].textContent = questions1.choice1
    options[1].textContent = questions1.choice2
    options[2].textContent = questions1.choice3
    options[3].textContent = questions1.choice4

    options.forEach(item => {
        item.addEventListener('click', function(event){
            var select = event.target
            console.log(select.value)

            if(select.matches("#choice-box") && dataset.answer === "2"){
                figure = figure + 100;
                displayScore();
                addQuestion2();
            }else {
                seconds = seconds - 5;
                displayScore();
                addQuestion2();
            }
       
              

        })
    })
        
}

function addQuestion2 (){
    question.textContent=questions2.question
    options[0].textContent = questions2.choice1
    options[1].textContent = questions2.choice2
    options[2].textContent = questions2.choice3
    options[3].textContent = questions2.choice4

    options.forEach(item => {
        item.addEventListener('click', function(event){
            var select = event.target
            console.log(select.value)

            if(select.matches("#choice-box") && dataset.answer === "1"){
                figure = figure + 100;
                displayScore();
                addQuestion3();
            }else {
                seconds = seconds - 5;
                displayScore();
                addQuestion3();
             }

        })
    })

}

function addQuestion3 (){
    question.textContent=questions3.question
    options[0].textContent = questions3.choice1
    options[1].textContent = questions3.choice2
    options[2].textContent = questions3.choice3
    options[3].textContent = questions3.choice4

    options.forEach(item => {
        item.addEventListener('click', function(event){
            var select = event.target
            console.log(select.value)

            if(select.matches("#choice-box") && dataset.answer === "2"){
                figure = figure + 100;
                displayScore();
                addQuestion4();
            }else {
                seconds = seconds - 5;
                displayScore();
                addQuestion4();
            }

        })
    })

}

function addQuestion4 (){
    question.textContent=questions4.question
    options[0].textContent = questions4.choice1
    options[1].textContent = questions4.choice2
    options[2].textContent = questions4.choice3
    options[3].textContent = questions4.choice4

    options.forEach(item => {
        item.addEventListener('click', function(event){
            var select = event.target
            console.log(select.value)

            if(select.matches("#choice-box") && dataset.answer === "4"){
                figure = figure + 100;
                displayScore();
                displaySaveScreen();
            }else {
                seconds = seconds - 5;
                displayScore();
                displaySaveScreen();
            }

        })
    })

}

document.getElementById("start-again").addEventListener("click",function(){
    location.reload();
})