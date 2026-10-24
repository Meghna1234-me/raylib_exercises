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
  y: 600,
};

const length = 100;
const angle = 85;

function update() {
  //change the state
}

function getRadian(angle) {
  return angle * (Math.PI / 180);
}

function drawFractralTree(depth, x, y, length, angle, thickness) {
  if (depth <= 0) return;

  const rightEndX = (x + (length * 85 / 100) * Math.cos(getRadian(angle * 90 / 100)));
  const rightEndY = (y - (length * 85 / 100) * Math.sin(getRadian(angle * 90 / 100)));

  const leftEndX = (x - (length * 85 / 100) * Math.cos(getRadian(angle * 90 / 100)));
  const leftEndY = (y - (length * 85 / 100) * Math.sin(getRadian(angle * 90 / 100)));

  r.DrawLineEx({ x: x, y: y }, { x: rightEndX, y: rightEndY }, (thickness * 50 / 100), r.WHITE);
  r.DrawLineEx({ x: x, y: y }, { x: leftEndX, y: leftEndY }, (thickness * 50 / 100), r.WHITE);
  drawFractralTree(depth - 1, rightEndX, rightEndY, (length * 85 / 100), (angle * 85 / 100), (thickness * 50 / 100));
  drawFractralTree(depth - 1, leftEndX, leftEndY, (length * 85 / 100), (angle * 85 / 100), (thickness * 50 / 100));
}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);
  r.DrawLineEx(start, end, 10, r.WHITE);
  drawFractralTree(8, end.x, end.y, length, angle, 10);
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