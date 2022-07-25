'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent =
      'Please, enter the number between 1 and 20!';
  }

  if (guess == number) {
    document.querySelector('.message').textContent = 'You win!';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    document.querySelector('body').style.backgroundColor = '#60b457';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;
    score = 20;
  } else if (guess != number) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > number ? 'You need less!' : 'You need more!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game over! You lost';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.message').textContent =
    'Please, enter the number between 1 and 20!';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
});
