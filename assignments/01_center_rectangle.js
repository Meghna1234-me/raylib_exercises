const r = require("raylib");
const windowWidth = 800;
const windowHeight = 400;
const FPS = 60;

function setup() {
  r.InitWindow(windowWidth, windowHeight, "center rectangle");
  r.SetTargetFPS(FPS);
}

function calculateCenter(outerLen, innerLen) {
  return (outerLen - innerLen) / 2;
}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);
  r.DrawRectangle(
    calculateCenter(windowWidth, 200),
    calculateCenter(windowHeight, 100),
    200,
    100,
    r.PURPLE,
  );
  r.EndDrawing();
}
function loop() {
  while (!r.WindowShouldClose()) {
    draw();
  }
}
function main() {
  setup();
  loop();
  r.CloseWindow();
}
main();
