const r = require("raylib");

function running() {
  return !r.WindowShouldClose();
}

function setup() {
  r.SetTraceLogLevel(r.LOG_NONE);
  const WIDTH = 500;
  const HEIGHT = 500;
  const TITLE = "spiral";
  const FPS = 5;

  r.InitWindow(WIDTH, HEIGHT, TITLE);
  r.SetTargetFPS(FPS);
  return {
    WIDTH,
    HEIGHT,
  };
}

function update() {
  //change the state
}

function getRadian(angle, cf) {
  return angle * (Math.PI / 180) - cf;
}

function draw(world, cf) {
  const theta = 3;

  r.BeginDrawing();
  r.ClearBackground(r.WHITE);
  let angle = -90;
  let radi = 5;

  while (radi < world.WIDTH / 15) {
    let point1 = world.WIDTH / 15 + radi * Math.cos(getRadian(angle, cf));
    let point2 = world.WIDTH / 15 + radi * Math.sin(getRadian(angle, cf));
    let point3 = (world.WIDTH / 15) * 3 + radi * Math.cos(getRadian(angle, cf));
    let point4 = (world.WIDTH / 15) + radi * Math.sin(getRadian(angle, cf));
    let point5 = (world.WIDTH / 15) * 5 + radi * Math.cos(getRadian(angle, cf));
    let point6 = (world.WIDTH / 15) + radi * Math.sin(getRadian(angle, cf));

    r.DrawCircle(point1, point2, 2, r.GRAY);
    r.DrawCircle(point3, point4, 2, r.GRAY);
    r.DrawCircle(point5, point6, 2, r.GRAY);

    angle += theta;
    radi = radi + 0.1;
  }
  // while (radi < world.WIDTH / 15) {


  //   angle += theta;
  //   radi = radi + 0.1;
  // }

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