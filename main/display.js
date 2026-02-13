const questionEl = document.getElementById("question");
const answerEl   = document.getElementById("answer");
const resultEl   = document.getElementById("result");

export function drawQuestion(text) {
  questionEl.textContent = text;
}

export function drawAnswer(text) {
  answerEl.textContent = text;
}

export function drawResult(text) {
  resultEl.textContent = text;
}
