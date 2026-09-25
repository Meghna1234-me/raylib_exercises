const r = require("raylib");

const windowWidth = 300;
const windowHeight = 200;
const FPS = 60;

const detectorWidth = 20;
const detectorHeight = windowWidth;
let detectorX = 0;
const Y = 0;
let speed;

function setup() {
  r.InitWindow(windowWidth, windowHeight, "particle detector");
  r.SetTargetFPS(FPS);
}

function calcOffset(windowWidth, detectorWidth) {
  const edge = windowWidth - detectorWidth;
  if (detectorX === 0) {
    speed = 1;
  }
  else if (detectorX === edge) {
    speed = -1;
  }
  detectorX = detectorX + speed;
}

function isOverlapping(x, width) {
  return detectorX + detectorWidth < x || detectorX > x + width;
}

function chooseColor() {
  return (isOverlapping(particle1X, particle1Width)) && (isOverlapping(particle2X, particle2Width)) ? r.WHITE : r.RED;
}

const particle1X = windowWidth / 3;
const particle1Width = 50;

const particle2X = 220;
const particle2Width = 10;

function drawDetector(x, y, width, height) {
  const color = chooseColor();
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);
  r.DrawRectangle(particle1X, Y, particle1Width, windowHeight, r.SKYBLUE);
  r.DrawRectangle(particle2X, Y, particle2Width, windowHeight, r.SKYBLUE);
  r.DrawRectangle(x, y, width, height, color);
  r.EndDrawing();
}

function loop() {
  while (!r.WindowShouldClose()) {
    calcOffset(windowWidth, detectorWidth);
    drawDetector(detectorX, Y, detectorWidth, detectorHeight, r.WHITE);
  }
}

function main() {
  setup();
  loop();
  r.CloseWindow();
}

main();