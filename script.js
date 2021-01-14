var scores, roundScores, activePlayer, gamePlaying;

function init() {
  scores = [0,0];
  roundScores = 0;
  activePlayer = 0;
  document.querySelector('.dice').style.display = 'none'
  document.getElementById("score--0").textContent = '0';
  document.getElementById("score--1").textContent = '0';
  document.querySelector('#name--0').textContent = 'Player 1';
  document.querySelector('#name--1').textContent = 'Player 2';
  document.querySelector('.player--1').classList.remove('player--active');
  document.querySelector('.player--0').classList.remove('player--active');
  document.querySelector('.player--0').classList.add('player--active');
  gamePlaying = true;

 
}

init()
function changePlayer() {
  var diceDom =document.querySelector('.dice');
  activePlayer === 0 ? activePlayer =1 : activePlayer=0; 
  roundScores = 0 ;
  document.getElementById('current--0').textContent = '0' ;
  document.getElementById('current--1').textContent = '0' ;
  document.querySelector('.player--0').classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');
  diceDom.style.display = 'none';

}
 
 
document.querySelector('.btn--roll').addEventListener('click', function() {
    if (gamePlaying) {
    dice = Math.floor(Math.random()*6) + 1;
    var diceDom =document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';  
    if(dice !== 1) {
    roundScores += dice;
    document.querySelector('#current--' + activePlayer).textContent= roundScores;

} else { changePlayer()
   
}
}   
})

document.querySelector('.btn--hold').addEventListener('click',function() {
  if (gamePlaying) {
  scores[activePlayer]+= roundScores;
  document.getElementById("score--" + activePlayer).textContent = scores[activePlayer];
  if(scores[activePlayer] >= 20) {
    document.querySelector('#name--' + activePlayer).textContent = 'Winner';
    document.querySelector('.dice').style.display = 'none'
    document.querySelector('.player--' + activePlayer).classList.remove('player--active');
    gamePlaying = false;
  }
  else {
    changePlayer()
  }
}  
})
document.querySelector('.btn--new').addEventListener('click', init)