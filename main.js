var randomNumber = Math.floor(Math.random() * 100) + 1;

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

var randomNumberFromPC = document.querySelector('.randomNumberFromPC');

var guessCount = 1;
var resetButton;


guessField.focus();

function checkGuess() {

  var userGuess = Number(guessField.value);

  if (guessCount === 1) {
    guesses.textContent = 'Poprzednie typy: ';
  }
  guesses.textContent += userGuess + ' ';
 
  if (userGuess === randomNumber) {
    lastResult.textContent = 'Gratulacje! Zgadłeś jaka to liczba!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = '!!!KONIEC GRY!!!';
    randomNumberFromPC.textContent = "Wylosowaną liczbą była liczba: " + String(randomNumber);
    setGameOver();
  } else {
    lastResult.textContent = 'Źle!';
    lastResult.style.backgroundColor = 'red';
    if(userGuess < randomNumber) {
      lowOrHi.textContent = 'Podana liczba jest zbyt mała!';
    } else if(userGuess > randomNumber) {
      lowOrHi.textContent = 'Podana liczba jest zbyt wysoka!';
    }
  }
 
  guessCount++;
  guessField.value = '';
  guessField.focus();

}

guessSubmit.addEventListener('click', checkGuess);



function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Rozpocznij nową grę';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;

  var resetParas = document.querySelectorAll('.resultParas p');
  for (var i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;
}