//The idea was to set up a number game (couldn't get the code working.)

//Set up variables we need to store the numbers data we will use

var randomNumber = Math.floor(Math.random() * 100) + 1;
var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('lastResult');
var lowOrHi = document.querySelector('lowOrHi');
var submitButton = document.querySelector('guessSubmit');
var guessField = document.querySelector('guessField');
var guessCount = 1;
var resetButton;

//focus the cursor into the text field so user can start typing
guessField.focus();

function checkGuess(){
    //declare variable for users guess and sets its value to the current value inside the text field
    var userGuess = Number(guessField);

    //If the guess is the users first guess, set the guesses text value with a label
    if(guessCount === 1){
        guesses.textContent = 'Previous Guesses: ';
    }
    //append the current guess onto the previous guesses label
    guesses.textContent += userGuess + ' ';

    //If the user guess is equal to the number, print a win message and end game
    if(userGuess === randomNumber){
        lastResult.textContent = 'Congratulations! You guessed the right number of daisies!';
        
        lowOrHi.textContent = '';
        setGameOver();
    }
    //If the user has guessed more than 10 times, end game
    else if (guessCount === 10){
        lastResult.textContent ='Too Many Guesses !!GAME OVER!!';
        setGameOver();
    }
    else {
        lastResult.style.backgroundColor = 'red';
        if(userGuess < randomNumber){
            lowOrHi.textContent = 'Last guess of daisies was too low!';
        }
        else if(userGuess > randomNumber){
            lowOrHi.textContent = 'Last guess of daisies was too high!';
        }
    }
    //add 1 to the the guess count, set the guess field to blank and focus ready for next guess
    guessCount++
    guessField.clear;
    guessField.focus();
}
//Implement the checkGuess method when the guessSubmit button is clicked
guessSubmit.addEventListener('click', checkGuess);

//When the gameover method is called, set the guess/submit fields to disabled, and add a button to play again, which resets the game if clicked
function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game?';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}
//Reset to all original values so the user can play again
function resetGame(){
    //set the guess count back to 1
    guessCount = 1;

    //clear all information paragraphs
    var resetParas = document.querySelectorAll('.resultParas p');

    //create a variable containing a list of all the paragraphs inside the div class, and remove the context of each
    for(var i=0; i < resetParas.length; i++){
        resetParas[i].textContent = '';
    }
    //remove the reset button
    resetButton.parentNode.removeChild(resetButton);

    //re-enable the user guess field, clear old value, and submit button
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    //reset the background color back to white
    lastResult.style.backgroundColor = 'white';

    //generate a new random number
    randomNumber = Math.floor(Math.random() *100)+1;
}
