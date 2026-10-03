const r = require("raylib");

let radius = 100;
let speed = 1
let speed1 = 2;
let speed2 = 2;
let smallRadius = 20;

const c1X = 250;
let c1Y = 250;

let c2X = 250 - radius + smallRadius;
const c2Y = 250;

const target = {
  x: 0,
  y: 0,
};

function running() {
  return !r.WindowShouldClose();
}

function setup() {
  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(500, 500, "raylib objects");
  r.SetTargetFPS(60);

}

function changeSpeed(speed) {
  return radius > r.GetScreenHeight() / 2 || radius < 50 ? -speed : speed;
}

function calculateDistance(X1, Y1, X2, Y2) {
  return Math.sqrt((X2 - X1) ** 2 + (Y2 - Y1) ** 2);
}

function changeOffset(cY) {
  //return cY < 250 - (radius - smallRadius) || cY > 250 + (radius - smallRadius) ? -speed : speed;
  if (cY > 250 + (radius - smallRadius)) {
    speed1 = -speed1;
  }
  else if (cY < 250 - (radius - smallRadius)) {
    speed1 = -speed1;
  }
}

function update() {
  speed = changeSpeed(speed);
  radius = radius + speed;

  changeOffset(c1Y);
  c1Y = c1Y - speed1;

  console.log(radius, c1Y);

  // speed2 = changeOffset(c2X, speed2);
  // c2X = c2X - speed2;
}


const babypink = {
  r: 255,
  g: 150,
  b: 194,
  a: 170,
};

const green = {
  r: 0,
  g: 200,
  b: 0,
  a: 100,
};

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  target.x = r.GetScreenWidth() / 2;
  target.y = r.GetScreenHeight() / 2;
  r.DrawCircle(c1X, c1Y, smallRadius, babypink);
  //r.DrawCircle(c2X, c2Y, smallRadius, babypink);

  r.DrawCircleV(target, radius, green);

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
  radius,
  smallRadius,
};