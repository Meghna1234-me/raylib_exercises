const r = require("raylib");

function running() {
  return !r.WindowShouldClose();
}

let x = 0;
let y = 0;
let speed1 = 1;
let speed2 = 1;

function setup() {
  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(500, 500, "pattern");
  r.SetTargetFPS(60);
}

function update() {
  if (y >= 245) {
    speed2 = -1;
    speed1 = 0;
  }
  else if (y < 2 || x >= 245) {
    speed2 = 0.8;
    speed1 = -1;
  }
  else if (x < 2 && y > 0) {
    speed1 = 1;
  }
  x += speed1;
  y += speed2;
}

function draw() {
  r.BeginDrawing();
  // r.ClearBackground(r.WHITE);
  r.DrawCircle(x, y, 5, r.PINK);

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