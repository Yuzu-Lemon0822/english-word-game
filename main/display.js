const questionEl = document.getElementById("question");
export const answerEl   = document.getElementById("answer");

export function drawQuestion(text) {
  questionEl.textContent = text;
}

export function drawAnswer(text) {
  answerEl.textContent = text;
}