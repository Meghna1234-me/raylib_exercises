const r = require("raylib");

function running() {
  return !r.WindowShouldClose();
}

function setup() {
  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(1000, 800, "fractral tree");
  r.SetTargetFPS(60);
}

const start = {
  x: 500,
  y: 800,
};
const end = {
  x: 500,
  y: 500,
};

const length = 100;
const angle = 0;

function update() {
  //change the state
}

function getRadian(angle) {
  return angle * (Math.PI / 180);
}

function drawFractralTree(depth, x, y, length, i) {
  if (depth <= 0) return;
  const rightEndX = (x + (length * 85 / 100) * Math.cos(getRadian(angle - (90 - angle) * i)));
  const rightEndY = (y - (length * 85 / 100) * Math.sin(getRadian(angle - (90 - angle) * i)));


  const leftEndX = (x - (length * 85 / 100) * Math.cos(getRadian(angle - (90 - angle) * i)));
  const leftEndY = (y - (length * 85 / 100) * Math.sin(getRadian(angle - (90 - angle) * i)));

  // console.log(x, y, leftEndX, leftEndY);

  r.DrawLine(x, y, rightEndX, rightEndY, r.WHITE);
  r.DrawLine(x, y, leftEndX, leftEndY, r.WHITE);
  drawFractralTree(depth - 1, rightEndX, rightEndY, (length * 85 / 100), i + 1);
  drawFractralTree(depth - 1, leftEndX, leftEndY, (length * 85 / 100), i + 1);
  // drawFractralTree(depth - 1);
}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);
  let i = 0;
  r.DrawLineV(start, end, r.WHITE);
  // r.DrawLine(400, 300, 470, 260, r.WHITE);
  // r.DrawLine(470, 260, 526, 228, r.WHITE);
  // r.DrawLine(526, 228, 571, 203, r.WHITE);
  drawFractralTree(4, end.x, end.y, 100, i);
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