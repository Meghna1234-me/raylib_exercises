const r = require("raylib");
const d = require("./d.js");
const f = require("./f.js")

const windowWidth = 400;
const windowHeight = 200;
const FPS = 60;

let d1 = d.createDetector(0, 0, 0, windowWidth / 2, 1);
let d2 = d.createDetector(windowWidth / 2, 0, windowWidth / 2, windowWidth, 2);

let f1 = f.createField(windowWidth / 2 - windowWidth / 4, 0, 40, r.SKYBLUE);
let f2 = f.createField(windowWidth / 2 + windowWidth / 4, 0, 10, r.SKYBLUE);

function running() {
  return !r.WindowShouldClose();
}

function setup() {
  r.InitWindow(windowWidth, windowHeight, "particle detector");
  r.SetTargetFPS(FPS);
}

function update() {
  d1 = d.update(d1, f1, f2);
  d2 = d.update(d2, f2, f2);
}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  f.drawField(f1);
  f.drawField(f2);
  d.drawDetector(d1);
  d.drawDetector(d2);

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