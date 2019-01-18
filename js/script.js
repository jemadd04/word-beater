window.addEventListener('load', init); // fires off init function when page is loaded

// Global variables

// Available levels
const levels = {
  easy: 5,
  medium: 3,
  hard: 1
}

// To change level
const currentLevel = levels.easy;

let time = currentLevel; // used let because it will change
let score = 0;
let isPlaying; // initialized; represents if the game is occuring or not (true or false)

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
  'speed',
  'heart',
  'wrestling',
  'printer',
  'coco',
  'stubborn',
  'hat',
  'river',
  'lucky',
  'statue',
  'cocktail',
  'brooklyn',
  'javascript',
  'revolver',
  'runaway',
  'marvel',
  'hero',
  'hulk',
  'flash',
  'batman'
];

// Initialize game
function init() {
  // Show number of seconds in UI
  seconds.innerHTML = currentLevel;
  // Load word from array
  showWord(words);
  // Start matching on word input
  wordInput.addEventListener('input', startMatch);
  // Call countdown every second
  setInterval(countdown, 1000);
  // Check game status
  setInterval(checkStatus, 50);
}

// Start match
function startMatch() {
  if(matchWords()) {
    isPlaying = true;
    time = currentLevel + 1; // accounting for page load
    showWord(words);
    wordInput.value = '';
    score++;
  }

  // If score is -1, display 0
  if(score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// Match currentWord to wordInput
function matchWords() {
  if(wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct!';
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}

// Choose and show random word
function showWord(words) {
  // Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // Output random word
  currentWord.innerHTML = words[randIndex];
}

// Countdown timer
function countdown() {
  // Make sure time is not run out
  if(time > 0) {
    // Decrement time
    time--;
  } else if(time === 0) {
    // Game is over
    isPlaying = false;
  }
  // Display time
  timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
  if(!isPlaying && time === 0){
    message.innerHTML = 'Game Over!';
    score = -1;
  }
}