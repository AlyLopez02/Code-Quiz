# Code-Quiz
## Description:
The files found with this README file come together to create a code quiz. This quiz was created from scratch. 

### HTML
In the HTML file, I set up the header and each page of the quiz. These pages are the following:
- start page
- first question page
- second question page
- third question page
- fourth question page
- results page
- highscores page

### CSS
In the CSS file, I changed the format and appearance of my quiz pages. This included their initial appearance and, for some elements, their appearance when hovered over.

## Javascript
In the Javascript file, I did multiple things. I:
- Created variables for multiple purposes.
- Created functions to save, retrieve, and render scores. They were saved and retrieved from the LocalStorage.
- Created functions to display each page and hide the rest when one was displayed. Additionally, some of these functions also included the ability to answer questions.
- Created a function to set the timer.
- Created event listeners to start functions when clicked, such as:
    - start the quiz
    - display the start page
    - clear the saved highscores
    - submit highscores with one's initials (as well as send the user back to the start page once submitted)

## Some Problem(s)
I feel the need to explain some things so I have done so below:

- I was unable to figure out how to sort my highscores. I attempted using the `sort()` method to do so, but was unable to figure it out. Then, I attempted using the `JSON.parse()` method to revert the strings, but that did not work for me either. If you know what I could be doing wrong, please let me know!

Please do not hesitate to inform or advise me on this or anything else in my code that could be done better. I truly appreciate the help!

## Screenshot:
Here is a screenshot of the deployed application:

![quiz in action](./README-assets/deployed%20application.png "Quiz in Action")

## Link to deployed application:

Here is the link to the deployed application via GitHub:

<a href="https://alylopez02.github.io/Code-Quiz/">https://alylopez02.github.io/Code-Quiz/</a>