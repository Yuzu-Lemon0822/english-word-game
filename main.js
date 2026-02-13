import { main } from "./main/game.js"

const canvas = document.getElementById("canvas")
export const ctx = canvas.getContext("2d") //display.jsへ
export const questioonEl = document.getElementById("question")
export const answerEl = document.getElementById("answer")

function resize() {
  canvas.width  = window.innerWidth
  canvas.height = window.innerHeight
}

resize()
window.addEventListener("resize", resize)

function loop() {
  requestAnimationFrame(loop);
  main()
}
loop();