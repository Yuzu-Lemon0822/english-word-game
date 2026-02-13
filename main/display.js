import { ctx } from "../main.js"

export function drawText(text, x, y) {
  ctx.fillStyle = "black"
  ctx.font = "32px sans-serif"
  ctx.fillText(text, x, y)
}
