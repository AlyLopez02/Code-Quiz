// ------------VARIABLES--------------------
// Variables for more than one page
var allHighscores = document.querySelector("#highscores");
var timer = document.querySelector("#timer");
var totalPoints = 0; //points earned during quiz
var secondsLeft = 59;

// Variables per page
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
var backBtn = document.getElementById("go-back");
var clearBtn = document.getElementById("clear");

// variable to hold all highscores
var scores = [];


// ------------FUNCTIONS--------------------
// Renders scores (puts them on the page)
function renderScores() {
    highscoreList.innerHTML = "";

    for (var i = 0; i < scores.length; i++) {
        var score = scores[i];

        var li = document.createElement("li");

        li.textContent = score;
        li.setAttribute("data-index", i);

        highscoreList.appendChild(li);
    }
};

// Retrieves scores from LocalStorage (getItem)
function init() {
    var storedScores = JSON.parse(localStorage.getItem("scores"));
    if (storedScores !== null) {
        scores = storedScores;
    }

    renderScores();
};

// Save scores to LocalStorage (setItem)
function storeScores() {
    localStorage.setItem("scores", JSON.stringify(scores));
};

// Functions for header
// function to view highscore page
function viewHighscores() {
    hideQuestionPages();
    resultsPage.classList.add("hide");
    startPage.classList.add("hide");
    highscorePage.classList.remove("hide");

    init();
};

// function to start the timer
function setTime() {

    var timerInterval = setInterval(function () {
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

// Functions for main
// function to start the quiz/display and answer the first question
function startQuiz() {
    setTime();
    startPage.classList.add("hide");
    firstQuestion.classList.remove("hide");
    totalPoints = 0;
    console.log(totalPoints);
    var optionsOne = document.getElementById("options-one");

    optionsOne.addEventListener("click", function (event) {
        firstQuestion.classList.add("hide");
        secondQuestion.classList.remove("hide");
        if (event.target === correctOne) {
            resultOne.textContent = "You answered correctly!";
            totalPoints = totalPoints + 25;
        } else {
            resultOne.textContent = "You answered incorrectly!";
            secondsLeft -= 10;
        }
        console.log(totalPoints);
    }, { once: true });

    questionTwo();
};

// function to display and answer the second question
function questionTwo() {
    var optionsTwo = document.getElementById("options-two")

    optionsTwo.addEventListener("click", function (event) {
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
    }, { once: true });

    questionThree();
};

// function to display and answer the third question
function questionThree() {
    var optionsThree = document.getElementById("options-three")

    optionsThree.addEventListener("click", function (event) {
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
    }, { once: true });

    questionFour();
};

// function to display and answer the fourth question
function questionFour() {

    var optionsFour = document.getElementById("options-four")

    optionsFour.addEventListener("click", function (event) {
        fourthQuestion.classList.add("hide");
        if (event.target === correctFour) {
            totalPoints = totalPoints + 25;
            secondsLeft = 0;
        } else {
            secondsLeft = 0;
        }
        console.log(totalPoints);
    }, { once: true });
};

// function to display results page
function showResults() {
    resultsPage.classList.remove("hide");
    var userScore = document.getElementById("user-score");
    userScore.textContent = "Your final score is: " + totalPoints + " points!";
};

// function to stop the display of all question pages
function hideQuestionPages() {
    firstQuestion.classList.add("hide");
    secondQuestion.classList.add("hide");
    thirdQuestion.classList.add("hide");
    fourthQuestion.classList.add("hide");
};


// ------------EVENT LISTENER BUTTONS--------------------
// when clicked, the quiz is started
startBtn.addEventListener("click", startQuiz);

// when clicked, the highscore page is displayed
allHighscores.addEventListener("click", viewHighscores);

// when clicked, the start page is displayed
backBtn.addEventListener("click", function (event) {
    highscorePage.classList.add("hide");
    startPage.classList.remove("hide");
    timer.textContent = "Time: " + 60;
    secondsLeft = 59;
})

// when clicked, the highscores are cleared and no longer stored in LocalStorage
clearBtn.addEventListener("click", function (event) {
    localStorage.clear();

    scores = [];

    storeScores();
    renderScores();
})

// when clicked, submits the user's input (their initials), stores and renders said input, and displays the highscores page
initialsForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var scoreInitials = initialsInput.value.trim() + " - " + totalPoints + " points";

    if (scoreInitials === "") {
        return;
    }

    scores.push(scoreInitials);
    initialsInput.value = "";

    storeScores();
    renderScores();
    viewHighscores();
});