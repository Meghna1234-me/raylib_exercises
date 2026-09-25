const r = require("raylib");
const screenWidth = 800;
const screenHeight = 800;
let start = 5;
function place(place) {
  return 5 + 55 * place;
}
function setup() {
  r.InitWindow(screenWidth, screenHeight, "move rectangle");
  r.SetTargetFPS(60);
}
function draw(x,y,width,height,color,)
function update() {}
function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);
  draw(place(0), place(0),50,50,r,r.YELLOW);
  r.EndDrawing();
}
function loop() {
  while (!r.WindowShouldClose()) {
    update();
    draw();
  }
}
function main() {
  setup();
  loop();
}
main();
