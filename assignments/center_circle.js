const r = require("raylib");

const WIDTH = 600;
const HEIGHT = 600;
const FPS = 60;

function setup() {
  r.InitWindow(WIDTH, HEIGHT, "center circle");
  r.SetTargetFPS(FPS);
}

const C1_X = 100;
const C1_Y = 100;
const R1 = 50;

const C2_X = 200;
const C2_Y = 200;
const R2 = 70;

function distance(X1, Y1, X2, Y2) {
  return Math.sqrt(((X2 - X1) ** 2) + ((Y2 - Y1) ** 2))
}

function isIntersecting(C1_X, C1_Y, R1, C2_X, C2_Y, R2) {
  return distance(C1_X, C1_Y, C2_X, C2_Y) <= R1 + R2;
}

function chooseColor(C1_X, C1_Y, R1, C2_X, C2_Y, R2) {
  return isIntersecting(C1_X, C1_Y, R1, C2_X, C2_Y, R2) ? r.RED : r.BLACK;
}

function drawCircles() {
  const color = chooseColor(C1_X, C1_Y, R1, C2_X, C2_Y, R2);
  r.DrawCircle(C1_X, C1_Y, R1, color);
  r.DrawCircle(C2_X, C2_Y, R2, color);
}


function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.WHITE);
  drawCircles();
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