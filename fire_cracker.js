const r = require("raylib");

const WIDTH = 800;
const HEIGHT = 800;
const FPS = 60;

function setup() {
  r.InitWindow(WIDTH, HEIGHT, "fire cracker");
  r.SetTargetFPS(FPS);
}

function update() { }

const recWidth = 50;
const recHeight = 100;
const recX = WIDTH / 2 - recWidth / 2;
const recY = HEIGHT - recHeight;

const CX = WIDTH / 2;
let CY = HEIGHT;

let C1 = CX;

function draw() {
  C1 = C1 + 2;
  //CY = CY - 3;
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);
  r.DrawRectangle(recX, recY, recWidth, recHeight, r.GRAY);
  if (CY >= 700) {
    r.DrawCircle(CX, CY, 10, r.GRAY);
  }
  else if (CY <= 100) {

    r.DrawCircle(CX, CY, 10, r.BLACK);
  } else {
    r.DrawCircle(CX, CY, 10, r.RED);
  }
  r.DrawCircle(C1, 100, 5, r.RED);
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