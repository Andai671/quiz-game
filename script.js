// DOM Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");

// Quiz Questions

const quizQuestions = [
  {
    question: 'How many "dogs" do we own currently?',
    answers: [
      { text: "none", correct: false },
      { text: "3", correct: true },
      { text: "2", correct: false },
      { text: "4", correct: false },
    ],
  },
  {
    question: "What is my favorite color?",
    answers: [
      { text: "Blue", correct: true },
      { text: "Green", correct: false },
      { text: "Red", correct: false },
      { text: "Black", correct: false },
    ],
  },
  {
    question: "What is my favorite food?",
    answers: [
      { text: "Pizza", correct: false },
      { text: "Burgers", correct: false },
      { text: "Sushi", correct: true },
      { text: "Tacos", correct: false },
    ],
  },
  {
    question: "What is my favorite kind of video game?",
    answers: [
      { text: "Action", correct: false },
      { text: "RPG", correct: false },
      { text: "FPS", correct: true },
      { text: "Sports", correct: false },
    ],
  },
  {
    question: "What is my favorite movie genre?",
    answers: [
      { text: "Comedy", correct: false },
      { text: "Drama", correct: false },
      { text: "Horror", correct: true },
      { text: "Sci-Fi", correct: false },
    ],
  },
];

// Quiz State VARS
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

// EVENT LISTENERS
startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

// FUNCTIONS
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  scoreSpan.textContent = 0;

  startScreen.classList.remove("active");
  quizScreen.classList.add("active");

  showQuestion();
}

function showQuestion() {
  answersDisabled = false;

  const currentQuestion = quizQuestions[currentQuestionIndex];
  currentQuestionSpan.textContent = currentQuestionIndex + 1;

  const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
  progressBar.style.width = progressPercent + "%";
  questionText.textContent = currentQuestion.question;
  answersContainer.innerHTML = "";

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");

    button.dataset.correct = answer.correct;

    button.addEventListener("click", selectAnswer);

    answersContainer.appendChild(button);
  });
}

function selectAnswer(event) {
  if (answersDisabled) return;

  answersDisabled = true;

  const selectedButton = event.target;
  const isCorrect = selectedButton.dataset.correct === "true";

  Array.from(answersContainer.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else if (button === selectedButton) {
      button.classList.add("incorrect");
    }
  });

  if (isCorrect) {
    score++;
    scoreSpan.textContent = score;
  }

  setTimeout(() => {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }, 1000);
}

function showResult() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");

  finalScoreSpan.textContent = score;

  const percentage = (score / quizQuestions.length) * 100;

  if (percentage >= 100) {
    resultMessage.textContent = "Perfect score! You know me so well!";
  } else if (percentage >= 80) {
    resultMessage.textContent = "Great job! You know me pretty well!";
  } else if (percentage >= 60) {
    resultMessage.textContent = "Not bad! You know me decently!";
  } else {
    resultMessage.textContent = "Keep trying! You don't know me that well!";
  }
}

function restartQuiz() {
  resultScreen.classList.remove("active");

  startQuiz();
}
