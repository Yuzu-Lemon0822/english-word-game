import { main } from "./main/game.js"

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