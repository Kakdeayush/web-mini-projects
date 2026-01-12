const sentences = [
  "The quick brown fox jumps over the lazy dog.",
  "Practice makes a person perfect.",
  "JavaScript is fun to learn.",
  "Coding improves problem solving skills."
];

const sentenceEl = document.getElementById("sentence");
const inputEl = document.getElementById("input");
const timeEl = document.getElementById("time");
const wpmEl = document.getElementById("wpm");
const accuracyEl = document.getElementById("accuracy");
const startBtn = document.getElementById("start-btn");

let time = 0;
let timer = null;
let currentSentence = "";

function startTest() {
  time = 0;
  timeEl.textContent = 0;
  inputEl.value = "";
  inputEl.disabled = false;
  inputEl.focus();

  currentSentence = sentences[Math.floor(Math.random() * sentences.length)];
  sentenceEl.textContent = currentSentence;

  timer = setInterval(() => {
    time++;
    timeEl.textContent = time;
    calculateWPM();
  }, 1000);
}

function calculateWPM() {
  const wordsTyped = inputEl.value.trim().split(" ").filter(w => w !== "").length;
  const minutes = time / 60;
  const wpm = minutes > 0 ? Math.round(wordsTyped / minutes) : 0;
  wpmEl.textContent = wpm;
}

inputEl.addEventListener("input", () => {
  const typedText = inputEl.value;

  let correctChars = 0;
  for (let i = 0; i < typedText.length; i++) {
    if (typedText[i] === currentSentence[i]) {
      correctChars++;
    }
  }

  const accuracy = typedText.length
    ? Math.round((correctChars / typedText.length) * 100)
    : 0;

  accuracyEl.textContent = `${accuracy}%`;

  if (typedText === currentSentence) {
    clearInterval(timer);
    inputEl.disabled = true;
  }
});

startBtn.addEventListener("click", startTest);
