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
    question: "What is my middle name?",
    answers: [
      { text: "Jude", correct: false },
      { text: "Peredo", correct: true },
      { text: "Sablan", correct: false },
      { text: "Ann", correct: false },
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
