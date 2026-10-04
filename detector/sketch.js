const r = require("raylib");
const d = require("./d.js");
const f = require("./f.js")

function running() {
  return !r.WindowShouldClose();
}

function setup() {
  let world = {};

  world.windowWidth = 400;
  world.windowHeight = 200;
  world.d1 = d.createDetector(0, 0, 0, world.windowWidth / 2, 1);
  world.d2 = d.createDetector(world.windowWidth / 2, 0, world.windowWidth / 2, world.windowWidth, 2);
  world.f1 = f.createField(world.windowWidth / 2 - world.windowWidth / 4, 0, 40, r.SKYBLUE);
  world.f2 = f.createField(world.windowWidth / 2 + world.windowWidth / 4, 0, 10, r.SKYBLUE);

  r.InitWindow(world.windowWidth, world.windowHeight, "particle detector");
  r.SetTargetFPS(60);

  return world;
}

function update(world) {
  world.d1 = d.update(world.d1, world.f1, world.f2);
  world.d2 = d.update(world.d2, world.f2, world.f2);
}

function draw(world) {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  f.drawField(world.f1);
  f.drawField(world.f2);
  d.drawDetector(world.d1);
  d.drawDetector(world.d2);

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