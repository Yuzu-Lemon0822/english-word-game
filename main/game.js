import { key } from "./input.js"
import { words } from "./data.js"
import { drawQuestion, drawAnswer, answerEl } from "./display.js"

let current = null
let answer = ""

function next() {
  current = words[Math.floor(Math.random() * words.length)]
}

export function main() {
  if (!current) next()

  // 入力処理
  for (let k in key) {
    if (key[k]) {
      if (k.length === 1) answer += k
      if (k === "Backspace") answer = answer.slice(0, -1)
      if (k === "Enter") {
        if (answer === "/next") {
          answerEl.classList.remove("correct");
          answerEl.classList.add("wrong", "shake");
          answer = current.EN
          setTimeout(() => {
            answerEl.classList.remove("wrong", "shake");
            next()
            answer = "";
          }, 800);
        } else if (answer === current.EN) {
          answerEl.classList.remove("wrong", "shake");
          answerEl.classList.add("correct");

          setTimeout(() => {
            answerEl.classList.remove("correct");
            next();
            answer = "";
          }, 800);
        } else {
          answerEl.classList.remove("correct");
          answerEl.classList.add("wrong", "shake");

          setTimeout(() => {
            answerEl.classList.remove("wrong", "shake");
            answer = "";
          }, 400);
        }
      }
      key[k] = false
    }
  }

  drawQuestion(`${current.JP} <${current.type}>`)
  drawAnswer(answer)
}
