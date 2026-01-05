const questions = [
  {
    question: "Which language is used for web development?",
    options: ["Python", "Java", "JavaScript", "C++"],
    answer: "JavaScript"
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlinks Text Mark Language",
      "None of these"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which one is NOT a programming language?",
    options: ["HTML", "Java", "Python", "C++"],
    answer: "HTML"
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionButtons = document.querySelectorAll(".option");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;

  optionButtons.forEach((btn, index) => {
    btn.textContent = currentQuestion.options[index];
    btn.classList.remove("correct", "wrong");
    btn.disabled = false;
  });

  nextBtn.style.display = "none";
}

optionButtons.forEach(button => {
  button.addEventListener("click", () => {
    const selectedAnswer = button.textContent;
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (selectedAnswer === correctAnswer) {
      button.classList.add("correct");
      score++;
    } else {
      button.classList.add("wrong");
    }

    optionButtons.forEach(btn => btn.disabled = true);
    nextBtn.style.display = "block";
  });
});

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  questionEl.textContent = "Quiz Completed!";
  document.querySelector(".options").style.display = "none";
  nextBtn.style.display = "none";
  scoreEl.textContent = `Your Score: ${score} / ${questions.length}`;
}

loadQuestion();
