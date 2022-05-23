// Variables for more than one page
var allHighscores = document.querySelector("#highscores");
var timer = document.querySelector("#timer");
var title = document.querySelector("h1");
var paragraph = document.querySelector("p");





// Pages
    // the variables in those pages
var firstPage = document.querySelector(".first-page");
    var startBtn = document.querySelector("#start-button");

var questionPage = document.querySelector(".question-pages");
    var theQuestions = document.querySelector("#the-questions");
    var options = document.querySelector(".options");
    var btnA = document.querySelector("#a");
    var btnB = document.querySelector("#b");
    var btnC = document.querySelector("#c");
    var btnD = document.querySelector("#d");
    var prevQuestionResult = document.querySelector("#previous-question-result");

var resultsPage = document.querySelector(".results");

var highscorePage = document.querySelector(".highscore-page");




// Total Points one earns (or doesn't earn) during the quiz
var totalPoints = "0"


// Functions & co.
var multipleChoice = [     //(Berhanu & Hibbard, 2020)
    {
        question: "Which of the following is the correct way to use the 'addElementById' method for a custom named id in Javascript?",
        possibleAnswers: {
            a: " document.getElementById(.button) ",
            b: " document.getElementById(\"button\") ",
            c: " document.getElementById(\" .button\") ",
            d: " file.getElementById(\"button\") "
        },
        answer: "b"
    },
    {
        question: "What method is used to call a function when one creates an event?",
        possibleAnswers: {
            a: " .addEventListener() ",
            b: " .listenForEvent() ",
            c: " .addEventReaction() ",
            d: " .eventStarter() "
        },
        answer: "a"
    },
    {
        question: "What type of file is usually used to format a webpage?",
        possibleAnswers: {
            a: " HTML ",
            b: " Javascript ",
            c: " CSS ",
            d: " Formatter "
        },
        answer: "c"
    },
    {
        question: "What does the API stand for in Web API?",
        possibleAnswers: {
            a: " Absolute Programmer Intuitive ",
            b: " Application Performance Increase ",
            c: " Application Programmer Interface ",
            d: " Application Programming Interface "
        },
        answer: "d"
    },
]





function setTime() {
    var secondsLeft = 59;

    var timerInterval = setInterval(function() {
        if (secondsLeft >= 1) {
            timer.textContent = "Time: " + secondsLeft;
            secondsLeft--;
        } else {
            timer.textContent = "Time: " + secondsLeft;
            clearInterval(timerInterval);
            showResults();
        }
    }, 1000);
    
}



function beginQuiz() {
    firstPage.classList.add("hide");
    questionPage.classList.remove("hide");
    theQuestions.textContent = multipleChoice[0].question
    btnA.textContent = multipleChoice[0].possibleAnswers["a"]
    btnB.textContent = multipleChoice[0].possibleAnswers["b"]
    btnC.textContent = multipleChoice[0].possibleAnswers["c"]
    btnD.textContent = multipleChoice[0].possibleAnswers["d"]

    options.addEventListener("click", function(event) {
        if (event === multipleChoice[0].answer){
            prevQuestionResult.textContent = "You answered correctly!";
            totalPoints + 25;
        } else {
            prevQuestionResult.textContent = "You answered incorrectly!";
        }


    }
    )
}















function showResults(){
    questionPage.classList.add("hide");
    resultsPage.classList.remove("hide");
    
    // add in a line telling them of their highscore
    // ask them to input their initials into a textbox and have them click a button
    // the button saves the information and changes the page to show the highscores   //might need to do outside of this function
    // then a button on that page sends them back to the starting point of the quiz   //might need to do outside of this function
}

startBtn.addEventListener("click", setTime);
startBtn.addEventListener("click", beginQuiz); //insert the name of the function that will create the quiz here




// References
// Berhanu, Y., & Hibbard, J. (2020, February 11). How to make a simple javascript quiz. SitePoint. https://www.sitepoint.com/simple-javascript-quiz/
// 