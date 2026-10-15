const r = require("raylib");

function running() {
  return !r.WindowShouldClose();
}

function setup() {
  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(800, 800, "rotating square");
  r.SetTargetFPS(10);
}

function update() {
  //change the state
}

let radi = 20;
let rotate = 0;
function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);
  for (let i = 0; i < 500; i = i + 2) {
    r.DrawPolyLines({ x: 400, y: 400 }, 4, radi + i, rotate, r.WHITE);
    rotate += 10;
  }
  r.EndDrawing();
}

function teardown() {
  r.CloseWindow();
}

module.exports = {
  running,
  setup,
  update,
  draw,
  teardown,
};