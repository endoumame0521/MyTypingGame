'use strict'

{
  const word = 'apple';

  let loc = 0;
  let score = 0;
  let miss = 0;

  const target = document.getElementById('target');
  const scoreLabel = document.getElementById('score');
  const missLabel = document.getElementById('miss');

  target.textContent = word;

  window.addEventListener('keydown', e => {
    console.log(e.key);
    if (e.key === word[loc]) {
      loc++;
      score++;
      scoreLabel.textContent = score;
    } else {
      miss++;
      missLabel.textContent = miss;
    }
  });
}