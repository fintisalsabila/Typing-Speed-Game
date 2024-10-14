const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settingBtn = document.getElementById("setting-btn");
const settings = document.getElementById("setting");
const settingsForm = document.getElementById("setting-form");
const difficultySelect = document.getElementById("difficulty");

//list of words
const words = ["apple", "steer", "eight", "drags", "loving", "nine", "elementary", "programmer", "another", "voice", "python", "java"];

//init word
let randomWord;
let score = 0;
let time = 12;
//focus on text
text.focus();
//start count down
const timeInterval = setInterval(updateTime, 1000);
//generate random word
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}
//add word to dom
function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}
addWordToDOM();
//update score
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

//update time
function updateTime() {
  time--;
  timeEl.innerHTML = time + "s";
  if (time === 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}
//game over
function gameOver() {
  endgameEl.innerHTML = `
        <h1>Time ran out</h1>
        <p>Your final score is ${score}</p>
        <button onclick="location.reload()">Restart</button>
    `;
  endgameEl.style.display = "flex";
}
//event
text.addEventListener("input", (e) => {
  const insetedText = e.target.value;
  if (insetedText === randomWord) {
    addWordToDOM();
    updateScore();
   
    e.target.value = "";
	
	time += 3;

    updateTime();
  }
});
