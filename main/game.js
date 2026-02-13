import { key } from "./input.js"
import { words } from "./data.js"
import { drawQuestion, drawAnswer, drawResult } from "./display.js"

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
        if (answer === current.EN) {
          drawResult("✅ Correct!");
          next();
        } else {
          drawResult(`❌ ${current.EN}`);
        }
        answer = ""
        setTimeout(() => {
          drawResult("")
        }, 800)
      }
      key[k] = false
    }
  }

  drawQuestion(`${current.JP} <${current.type}>`)
  drawAnswer(answer)
}
