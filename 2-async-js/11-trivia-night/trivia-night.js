// Trivia Night 🧐
// Codédex

const quizContainer = document.getElementById("quiz");
const startButton = document.getElementById("startBtn");

// Redefined function 💖
async function fetchTriviaQuestions() {
  const response = await fetch("https://opentdb.com/api.php?amount=10");
  if (!response.ok) {
    throw new Error("Failed to fetch trivia questions");
  }
  const data = await response.json();
  return data.results;
}

function displayTriviaQuestions(questions) {
  questions.forEach((question, index) => {
    const questionElement = document.createElement("div");
    questionElement.classList.add("question");
    questionElement.innerHTML = `<p>${index + 1}. ${question.question}</p>`;

    const radioGroupName = `question${index}`;

    const answers = [...question.incorrect_answers, question.correct_answer];

    answers.forEach((answer) => {
      const answerElement = document.createElement("div");
      answerElement.classList.add("answer");
      answerElement.innerHTML = `
       <label>
         <input id="question-${index}" type="radio" name="${radioGroupName}" value="${answer}">
         ${answer}
       </label>
     `;
      questionElement.appendChild(answerElement);
      if (answer === question.correct_answer) {
        answerElement.innerHTML += "✅";
      }
    });

    quizContainer.appendChild(questionElement);
  });
}

startButton.addEventListener("click", async () => {
  startButton.disabled = true;
  const questions = await fetchTriviaQuestions();
  displayTriviaQuestions(questions);
});
