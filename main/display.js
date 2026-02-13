import { ctx, questionEl, answerEl } from "../main.js"

export function drawText(text, x, y) {
  ctx.fillStyle = "black"
  ctx.font = "32px sans-serif"
  ctx.fillText(text, x, y)
}

export function drawQuestion(text) {
  questionEl.textContent = text;
}

export function drawAnswer(text) {
  answerEl.textContent = text;
}
/*
export function drawResult(text) {
  resultEl.textContent = text;
}
*/