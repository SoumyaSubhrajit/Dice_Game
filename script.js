'use strict';

// Selecting Elements....

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

// Buttons
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold');

// Primary Chnaging..
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let score, currentScore, activePlayer, playing;


const init = function () {
  score = [0, 0];
  currentScore = 0;
  playing = true;
  activePlayer = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  diceEl.classList.remove('hidden');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner')
  player0.classList.add('player--active')
  player1.classList.remove('player--active')
}
init();

const switchPlayers = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  // for the danayamiclly set the 
  document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
}

//  WHY THE PLAYER NAME STARTS WITH PLAYER 0 AND 1
// ANS-> bcz we can store those values inside an array and retrive by 0 and 1 indexs it will be easy.


// Adding fucntionality to the dice roll.
btnRoll.addEventListener('click', function () {
  if (playing) {
    // Generate random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // Display the dice.
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`


    if (dice !== 1) {
      currentScore += dice;
      // for the danayamiclly set the 
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;

    } else {
      // Switch the player..
      switchPlayers();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active players's score.
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
    // 2. Check if player's score is>=100

    //Finish the Game.
    if (score[activePlayer] >= 20) {
      // If I win is set ;
      playing = false;
      diceEl.classList.add('hidden');
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }
    else {
      // Switch to the next player.
      switchPlayers();
    }
  }
})


btnNew.addEventListener('click', init)









// To stop executing you can get help of boolean values..