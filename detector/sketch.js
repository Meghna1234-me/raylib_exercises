const r = require("raylib");
const d = require("./detector.js");
const d1 = require("./d1.js");
const d2 = require("./d2.js");
const d3 = require("./d3.js");

const windowWidth = 400;
const windowHeight = 200;
const FPS = 60;

const detectorWidth = 20;
const detectorHeight = windowHeight;

const f1X = windowWidth / 2 - windowWidth / 4;
const f1Y = 0;
const f1Width = 40;
const f1End = f1X + f1Width;

const f2X = windowWidth / 2 + windowWidth / 4;
const f2Y = 0;
const f2Width = 10;
const f2End = f2X + f2Width;

const f3X = 0;
const f3Y = windowHeight / 3;
const f3Width = windowWidth;
const f3Height = f1Width - 10;
const f3End = f3Y + f3Height;

function running() {
  return !r.WindowShouldClose();
}

function setup() {
  r.InitWindow(windowWidth, windowHeight, "particle detector");
  r.SetTargetFPS(FPS);
}

function update() {
  d1.Velocity = d.changeVelocity(d1.X, d1.Start, d1.Edge, detectorWidth, d1.Velocity);
  d1.X = d.changeDetectorPosition(d1.X, d1.Velocity);

  d2.Velocity = d.changeVelocity(d2.X, d2.Start, d2.Edge, detectorWidth, d2.Velocity);
  d2.X = d.changeDetectorPosition(d2.X, d2.Velocity);

  d3.Velocity = d.changeVelocity(d3.Y, d3.Start, d3.End, d3.Height, d3.Velocity);
  d3.Y = d.changeDetectorPosition(d3.Y, d3.Velocity);
}

function isOverlapping(start1, end1, start2, end2) {
  return !(end1 < start2 || start1 > end2);
}

function chooseColor(detectorX, detectorEnd, particleX, particleEnd) {
  return (isOverlapping(detectorX, detectorEnd, particleX, particleEnd)) ? r.RED : r.WHITE;
}

function drawField(particle1X, particleY, particle1Width, windowHeight, color) {
  r.DrawRectangle(particle1X, particleY, particle1Width, windowHeight, color);
}

function drawDetector(detectorX, detectorY, detectorWidth, detectorHeight, color) {
  r.DrawRectangle(detectorX, detectorY, detectorWidth, detectorHeight, color);
}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  let d1End = d1.X + detectorWidth;
  let d2End = d2.X + detectorWidth;
  let d3End = d3.Y + d3.Height;

  let d1Color = chooseColor(d1.X, d1End, f1X, f1End);
  let d2Color = chooseColor(d2.X, d2End, f2X, f2End);
  let d3Color = chooseColor(d3.Y, d3End, f3Y, f3End);

  drawField(f1X, f1Y, f1Width, windowHeight, r.SKYBLUE);
  drawField(f2X, f2Y, f2Width, windowHeight, r.SKYBLUE);
  drawField(f3X, f3Y, f3Width, f3Height, r.SKYBLUE);
  drawDetector(d1.X, d1.Y, detectorWidth, detectorHeight, d1Color);
  drawDetector(d2.X, d2.Y, detectorWidth, detectorHeight, d2Color);
  drawDetector(d3.X, d3.Y, d3.Width, d3.Height, d3Color);

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