const r = require("raylib");

const width = 640;
const height = 400;

const FPS = 50;

function setup() {
  r.InitWindow(width, height, "waves");
  r.SetTargetFPS(FPS);
}

const waveRadius = 20;
let waveX = waveRadius / 2;
const waveY = 100;
const waveSpeed = 1;
let frameCount = 0;

function update() {
  waveX += waveSpeed;
  frameCount++;
  if (frameCount % (2 * waveRadius) === 0) {
    waveX = waveRadius / 2;
  }
}

function drawWave(waveX, waveY, waveRadius) {
  r.DrawCircle(waveX, waveY, waveRadius, r.SKYBLUE);
}

function drawSetOfWaves(index) {
  drawWave(waveX + (index - 2) * waveRadius, waveY, waveRadius);
  drawWave(waveX + index * waveRadius, waveY, waveRadius);
  drawWave(waveX + (index + 2) * waveRadius, waveY, waveRadius);
  drawWave(waveX + (index + 4) * waveRadius, waveY, waveRadius);
  drawWave(waveX + (index + 6) * waveRadius, waveY, waveRadius);
}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);
  drawSetOfWaves(0)
  //drawSetOfWaves(10)
  //drawSetOfWaves(20)
  //drawSetOfWaves(30)
  r.DrawRectangle(0, waveY, width, height, r.SKYBLUE);
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
  r.CloseWindow()
}

main();
