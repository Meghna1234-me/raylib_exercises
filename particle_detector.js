const r = require("raylib");

const windowWidth = 400;
const windowHeight = 200;
const FPS = 60;

const detectorWidth = 20;
const detectorHeight = windowWidth;
const Y = 0;

const particle1X = windowWidth / 2 - windowWidth / 4;
const particle1Width = 40;

const particle2X = windowWidth / 2 + windowWidth / 4;
const particle2Width = 10;

const particle3X = Y;
const particle3Y = windowHeight / 3;
const particle3Width = windowWidth;
const particle3Height = particle1Width;

let detector1X = 0;

let detector2X = windowWidth / 2;

const detector3X = particle3X;
let detector3Y = 0;
const detector3Width = particle3Width;
const detector3Height = detectorWidth;

let speed1;
let speed2;
let speed3;

function setup() {
  r.InitWindow(windowWidth, windowHeight, "particle detector");
  r.SetTargetFPS(FPS);
}

const detector1start = 0;
const detector2start = windowWidth / 2;
const detector3start = 0;

function calcOffset1(windowWidth, detectorstart) {
  const edge = windowWidth / 2 - detectorWidth;
  if (detector1X === detectorstart) {
    speed1 = 1;
  }
  else if (detector1X === edge) {
    speed1 = -1;
  }
  detector1X = detector1X + speed1;
}

function calcOffset2(detectorWidth, detectorstart) {
  const edge = windowWidth - detectorWidth;
  if (detector2X === detectorstart) {
    speed2 = 2;
  }
  else if (detector2X === edge) {
    speed2 = -2;
  }
  detector2X = detector2X + speed2;
}

function calcOffset3(detectorstart) {
  const edge = windowHeight - detector3Height;
  if (detector3Y === detectorstart) {
    speed3 = 1;
  }
  else if (detector3Y === edge) {
    speed3 = -1;
  }
  detector3Y = detector3Y + speed3;
}

function isOverlapping(x, width, detectorX) {
  return detectorX + detectorWidth < x || detectorX > x + width;
}

function chooseColor(particleX, particleWidth, detectorX) {
  return (isOverlapping(particleX, particleWidth, detectorX)) ? r.WHITE : r.RED;
}


function drawDetector() {
  const color1 = chooseColor(particle1X, particle1Width, detector1X);
  const color2 = chooseColor(particle2X, particle2Width, detector2X);
  const color3 = chooseColor(particle3Y, particle3Height, detector3Y);
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);
  r.DrawRectangle(particle1X, Y, particle1Width, windowHeight, r.SKYBLUE);
  r.DrawRectangle(particle2X, Y, particle2Width, windowHeight, r.SKYBLUE);
  r.DrawRectangle(particle3X, particle3Y, particle3Width, particle3Height, r.SKYBLUE);
  r.DrawRectangle(detector1X, Y, detectorWidth, detectorHeight, color1);
  r.DrawRectangle(detector2X, Y, detectorWidth, detectorHeight, color2);
  r.DrawRectangle(detector3X, detector3Y, detector3Width, detector3Height, color3);
  r.EndDrawing();
}

function loop() {
  while (!r.WindowShouldClose()) {
    calcOffset1(windowWidth, detector1start);
    calcOffset2(detectorWidth, detector2start);
    calcOffset3(detector3start);
    drawDetector();
  }
}

function main() {
  setup();
  loop();
  r.CloseWindow();
}

main();