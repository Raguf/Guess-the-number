'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct Number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 23;

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 100;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // When there is not number value
  if (!guess) {
    document.querySelector('.message').textContent = '❌ No Number!';

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number';
    document.querySelector('.highscore').textContent = highScore;

    // When player wins and background & color number to change color
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.color = '#60b347';

    // When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '☝️ Too high';
      score--;
      document.querySelector('.score').textContent = score;

      // When player lost
    } else {
      document.querySelector('.message').textContent = '😒 You lost the game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#ff6347';
    }

    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '👇 Too low';
      score--;
      document.querySelector('.score').textContent = score;

      // When player lost
    } else {
      document.querySelector('.message').textContent = '😒 You lost the game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#ff6347';
    }
  }
});
