const r = require("raylib");

const windowWidth = 400;
const windowHeight = 300;
const FPS = 60;

const detectorWidth = 30;
const detectorHeight = windowWidth;
let detectorX = 0;
const detectorY = 0;
let speed = 1;


function setup() {
  r.InitWindow(windowWidth, windowHeight, "particle detector");
  r.SetTargetFPS(FPS);
}

function calcOffset(windowWidth, detectorWidth, detectorX, speed) {
  const edge = windowWidth - detectorWidth;
  if (detectorX === 0) {
    speed = 1;
  }
  else if (detectorX === edge) {
    speed = -1;
  }
  detectorX = detectorX + speed;
}

function draw(x, y, width, height, color) {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);
  r.DrawRectangle(x, y, width, height, color);
  r.EndDrawing();
}

function loop() {
  while (!r.WindowShouldClose()) {
    calcOffset(windowWidth, detectorWidth, detectorX, speed);
    draw(detectorX, detectorY, detectorWidth, detectorHeight, r.WHITE);
  }
}

function main() {
  setup();
  loop();
}

main();