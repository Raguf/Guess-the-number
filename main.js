'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct Number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 23;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // When there is not number value
  if (!guess) {
    //document.querySelector('.message').textContent = '❌ No Number!';
    displayMessage('❌ No Number!');

    // When player wins
  } else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = '🎉 Correct Number';
    displayMessage('🎉 Correct Number');
    //document.querySelector('.number').textContent = secretNumber;
    displayNumber(secretNumber);

    // When player wins and background & color number to change color
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.color = '#60b347';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is too high or low
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '☝️ Too high' : '👇 Too low';
      displayMessage(guess > secretNumber ? '☝️ Too high' : '👇 Too low');
      score--;
      // document.querySelector('.score').textContent = score;
      displayScore(score);

      // When player lost
    } else {
      //document.querySelector('.message').textContent = '😒 You lost the game!';
      displayMessage('👶 Game over baby!');
      //document.querySelector('.score').textContent = 0;
      displayScore(0);
      document.querySelector('body').style.backgroundColor = '#ff6347';
    }
  }
});

// If player push on "Again" button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  //document.querySelector('.score').textContent = score;
  displayScore(score);
  //document.querySelector('.number').textContent = '?';
  displayNumber('?');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#363535';
  document.querySelector('.number').style.color = '#363535';
});
