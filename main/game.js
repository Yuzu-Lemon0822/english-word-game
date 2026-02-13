import { ctx } from "../main.js"
import { key } from "./input.js"
import { words } from "./data.js"
import { drawText } from "./display.js"

let current = null
let answer = ""

function next() {
  current = words[Math.floor(Math.random() * words.length)]
  answer = ""
}

export function main() {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

  if (!current) next()

  // 入力処理
  for (let k in key) {
    if (key[k]) {
      if (k.length === 1) answer += k
      if (k === "Backspace") answer = answer.slice(0, -1)
      if (k === "Enter") {
        if (answer === current.EN) {
          next()
        }
        answer = ""
      }
      key[k] = false
    }
  }

  drawText(`${current.JP} <${current.type}>`, 100, 100)
  drawText(answer, 100, 150)
}
