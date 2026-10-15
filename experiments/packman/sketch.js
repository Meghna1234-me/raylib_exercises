const r = require("raylib");

function running() {
  return !r.WindowShouldClose();
}

function setup() {
  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(500, 500, "raylib objects");
  r.SetTargetFPS(60);
}

const radius = 40;
const speed = 0.5;
let speed1 = 0.7;
let speed2 = 0.7;
let angle1 = -60;
let angle2 = 240;
const startAngle1 = -60;
const endAngle1 = -90;
const startAngle2 = 240;
const endAngle2 = 270;

const target = {
  x: 460,
  y: 100,
};

function changeSpeed(angle, start, end, speed) {
  return Math.abs(angle) > Math.abs(end) || Math.abs(angle) < Math.abs(start) ? -speed : speed;
}

// function checkPosition() {
//   return target.x > radius ? 
// }

function update() {
  target.x = target.x - speed;

  speed2 = changeSpeed(angle2, startAngle2, endAngle2, speed2);
  angle2 = angle2 + speed2;

  speed1 = changeSpeed(angle1, startAngle1, endAngle1, speed1)
  angle1 = angle1 - speed1;
}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  r.DrawCircleSector(target, radius, angle1, angle2, 100, r.WHITE);

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