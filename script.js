'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let initialScore = 20;
let highscore = 0;

// Functions
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message
};
const displaySecretNumber = function (secretNumber) {
    document.querySelector('.number').textContent = secretNumber
};
const displayScore = function (score) {
    document.querySelector('.score').textContent = score
};
const changeBodyStyle = function (style) {
    document.querySelector('body').style.backgroundColor = style
};
const changeWidth = function (width) {
    document.querySelector('.number').style.width = width
};

// Check  Button!
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value)
    // When there is no input.
    if (!guess) {
        displayMessage('No number!')
    // When player wins.
    } else if (guess === secretNumber) {
        displayMessage('Correct number!')
        displaySecretNumber(secretNumber);
        changeBodyStyle('#60b347');
        changeWidth('30rem')
        if(initialScore > highscore) {
            highscore = initialScore;
            document.querySelector('.highscore').textContent = highscore;
        };
    // When guess is wrong.
    } else if (guess !== secretNumber) {
        if(initialScore > 1) {
            displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!')
            initialScore--;
            displayScore(initialScore);
        // Game Over
        } else {
            displayMessage('Game Over!');
            displayScore(0);
            changeBodyStyle('red');
            displaySecretNumber(secretNumber);
        }
    }
});

// Again Button!
document.querySelector('.again').addEventListener('click', function() {
    // Restore initial value of the score and secretNumber variables
    initialScore = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    // Restore initial message conditions: Number, score and guess input field.
    displayScore(initialScore);
    displayMessage('Start guessing...');
    document.querySelector('.guess').value = '';
    displaySecretNumber('?')
    // Restore original background n number width.
    changeBodyStyle('#222');
    changeWidth('15rem')
});
