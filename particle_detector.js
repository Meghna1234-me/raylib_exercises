const r = require("raylib");

const windowWidth = 400;
const windowHeight = 200;
const FPS = 60;

const detectorWidth = 20;
const detectorHeight = windowHeight;
const Y = 0;

let d1X = 0;
const d1Edge = windowWidth / 2;
let d1Velocity = 1;

let d2X = windowWidth / 2;
const d2Edge = windowWidth;
let d2Velocity = 2;

const f1X = windowWidth / 2 - windowWidth / 4;
const f1Width = 40;
const f1End = f1X + f1Width;

const f2X = windowWidth / 2 + windowWidth / 4;
const f2Width = 10;
const f2End = f2X + f2Width;

const f3X = Y;
const f3Y = windowHeight / 3;
const f3Width = windowWidth;
const f3Height = f1Width - 10;
const f3End = f3Y + f3Height;

let d3X = f3X;
let d3Y = 0;
const d3End = windowHeight;
const d3Width = f3Width;
const d3Height = detectorWidth;

let d3Velocity = 1;

function setup() {
  r.InitWindow(windowWidth, windowHeight, "particle detector");
  r.SetTargetFPS(FPS);
}

const d1Start = 0;
const d2Start = windowWidth / 2;
const d3Start = 0;

function isOutofBound(detectorX, detectorEnd, detectorStart, detectorWidth) {
  const end = detectorEnd - detectorWidth;
  return detectorX < detectorStart || detectorX > end;
}

function changeVelocity(detectorX, detectorStart, detectorEnd, detectorWidth, speed) {
  return isOutofBound(detectorX, detectorEnd, detectorStart, detectorWidth) ? -speed : speed;
}

function changeDetectorPosition(detectorX, detectorVelocity) {
  return detectorX + detectorVelocity;
}

function update() {
  d1Velocity = changeVelocity(d1X, d1Start, d1Edge, detectorWidth, d1Velocity);
  d1X = changeDetectorPosition(d1X, d1Velocity);

  d2Velocity = changeVelocity(d2X, d2Start, d2Edge, detectorWidth, d2Velocity);
  d2X = changeDetectorPosition(d2X, d2Velocity);

  d3Velocity = changeVelocity(d3Y, d3Start, d3End, d3Height, d3Velocity);
  d3Y = changeDetectorPosition(d3Y, d3Velocity);
}

function isOverlapping(start1, end1, start2, end2) {
  return !(end1 < start2 || start1 > end2);
}

function chooseColor(detectorX, detectorEnd, particleX, particleEnd) {
  return (isOverlapping(detectorX, detectorEnd, particleX, particleEnd)) ? r.RED : r.WHITE;
}

function drawField(particle1X, particle1Width, windowHeight, color) {
  r.DrawRectangle(particle1X, 0, particle1Width, windowHeight, color);
}

function drawDetector(detectorX, detectorWidth, detectorHeight, color) {
  r.DrawRectangle(detectorX, 0, detectorWidth, detectorHeight, color);
}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  let d1End = d1X + detectorWidth;
  let d2End = d2X + detectorWidth;
  let d3End = d3Y + d3Height;
  let d1Color = chooseColor(d1X, d1End, f1X, f1End);
  let d2Color = chooseColor(d2X, d2End, f2X, f2End);
  let d3Color = chooseColor(d3Y, d3End, f3Y, f3End);

  drawField(f1X, f1Width, windowHeight, r.SKYBLUE);
  drawField(f2X, f2Width, windowHeight, r.SKYBLUE);
  r.DrawRectangle(f3X, f3Y, f3Width, f3Height, r.SKYBLUE);
  drawDetector(d1X, detectorWidth, detectorHeight, d1Color);
  drawDetector(d2X, detectorWidth, detectorHeight, d2Color);
  r.DrawRectangle(d3X, d3Y, d3Width, d3Height, d3Color);

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
  r.CloseWindow();
}

main();