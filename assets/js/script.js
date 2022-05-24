// Variables for more than one page
var allHighscores = document.querySelector("#highscores");
var timer = document.querySelector("#timer");
var totalPoints = 0; //points earned during quiz
var secondsLeft = 59;

// Variables for one page
    // start page
    var startPage = document.querySelector(".start-page");
    var startBtn = document.querySelector("#start-button");

    // First question page
    var firstQuestion = document.querySelector(".first-question");
    var correctOne = document.getElementById("1b")

    // Second question page
    var secondQuestion = document.querySelector(".second-question");
    var correctTwo = document.getElementById("2a")
    var resultOne = document.getElementById("result1");

    // Third question page
    var thirdQuestion = document.querySelector(".third-question");
    var correctThree = document.getElementById("3c")
    var resultTwo = document.getElementById("result2");

    // Fourth question page
    var fourthQuestion = document.querySelector(".fourth-question");
    var correctFour = document.getElementById("4d")
    var resultThree = document.getElementById("result3");

    // Results page
    var resultsPage = document.querySelector(".results");
    var initialsForm = document.getElementById("initials-form");
    var initialsInput = document.getElementById("initials");

    // Highscores page
    var highscorePage = document.querySelector(".highscore-page");
    var highscoreList = document.getElementById("highscore-list");


// variable to hold all highscores
    var scores = [];

// functions to render and save scores
function renderScores(){

    for (var i = 0; i < scores.length; i++) {
        var score = scores[i];

        var li = document.createElement("li");

        li.textContent = score;
        li.setAttribute("data-index", i);

        highscoreList.appendChild(li);
    }
};

function init() {
    var storedScores = JSON.parse(localStorage.getItem("scores"));

    if (storedScores !== null) {
        scores = storedScores;
    }

    renderScores();
};

function storeScores() {
    localStorage.setItem("scores", JSON.stringify(scores));
};

initialsForm.addEventListener("submit", function(event) {
    var scoreInitials = initialsInput.value.trim();

    if (scoreInitials === ""){
        return;
    }

    scores.push(scoreInitials);
    initialsInput.value = "";

    storeScores();
    renderScores();
});


// other functions

allHighscores.addEventListener("click", viewHighscores);

function viewHighscores() {
    hideQuestionPages();
    resultsPage.classList.add("hide");
    startPage.classList.add("hide");
    highscorePage.classList.remove("hide");

    init();
};

function setTime() {

    var timerInterval = setInterval(function() {
        if (secondsLeft >= 1) {
            timer.textContent = "Time: " + secondsLeft;
            secondsLeft--;
        } else {
            timer.textContent = "Time: " + secondsLeft;
            clearInterval(timerInterval);
            hideQuestionPages();
            showResults();
        }
    }, 1000);

};



function startQuiz() {
    startPage.classList.add("hide");
    firstQuestion.classList.remove("hide");

    var optionsOne = document.getElementById("options-one");

    optionsOne.addEventListener("click", function(event) {
        firstQuestion.classList.add("hide");
        secondQuestion.classList.remove("hide")
        if (event.target === correctOne) {
            resultOne.textContent = "You answered correctly!";
            totalPoints = totalPoints + 25;
        } else {
            resultOne.textContent = "You answered incorrectly!";
            secondsLeft -= 10;
        }
        console.log(totalPoints);
    })

    questionTwo();
};

function questionTwo() {
    var optionsTwo = document.getElementById("options-two")
    
    optionsTwo.addEventListener("click", function(event){
        secondQuestion.classList.add("hide");
        thirdQuestion.classList.remove("hide");
        if (event.target === correctTwo) {
            resultTwo.textContent = "You answered correctly!";
            totalPoints = totalPoints + 25;
        } else {
            resultTwo.textContent = "You answered incorrectly!";
            secondsLeft -= 10;
        }
        console.log(totalPoints);

    })

    questionThree();
};

function questionThree() {
    var optionsThree = document.getElementById("options-three")
    
    optionsThree.addEventListener("click", function(event){
        thirdQuestion.classList.add("hide");
        fourthQuestion.classList.remove("hide");
        if (event.target === correctThree) {
            resultThree.textContent = "You answered correctly!";
            totalPoints = totalPoints + 25;
        } else {
            resultThree.textContent = "You answered incorrectly!";
            secondsLeft -= 10;
        }
        console.log(totalPoints);

    })

    questionFour();
};

function questionFour() {
    
    var optionsFour = document.getElementById("options-four")
    
    optionsFour.addEventListener("click", function(event){
        fourthQuestion.classList.add("hide");
        if (event.target === correctFour) {
            totalPoints = totalPoints + 25;
            secondsLeft = 0;
        } else {
            secondsLeft = 0;
         }


    })
};



function hideQuestionPages(){
    firstQuestion.classList.add("hide");
    secondQuestion.classList.add("hide");
    thirdQuestion.classList.add("hide");
    fourthQuestion.classList.add("hide");
};



function showResults(){
    resultsPage.classList.remove("hide");
    var userScore = document.getElementById("user-score");
    userScore.textContent = "Your final score is: " + totalPoints + " points!";

    
};

    // add in a line telling them of their highscore
    // ask them to input their initials into a textbox and have them click a button
    // the button saves the information and changes the page to show the highscores   //might need to do outside of this function
    // then a button on that page sends them back to the starting point of the quiz   //might need to do outside of this function



startBtn.addEventListener("click", setTime);
startBtn.addEventListener("click", startQuiz);
