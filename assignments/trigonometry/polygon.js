const r = require("raylib");

function setup() {
  const WIDTH = 400;
  const HEIGHT = 400;
  const FPS = 60;

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(WIDTH, HEIGHT, "circle points");
  r.SetTargetFPS(FPS);
}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  const center = { x: 200, y: 200 };
  const radi = 150;
  r.DrawCircleV(center, radi, r.WHITE);

  let angle = -90;
  const points = [];
  for (let i = 0; i < 7; i++) {
    const x = center.x + radi * (Math.cos(angle * (Math.PI / 180)));
    const y = center.y + radi * (Math.sin(angle * (Math.PI / 180)));
    points.push({ x, y });
    r.DrawCircle(x, y, 7, r.RED);
    angle += 360 / 7;
  }
  for (let i = 0; i < points.length; i++) {
    const j = i === (points.length - 1) ? i - 1 : i + 1;

    r.DrawLineV(points[i], points[j], r.BLACK);
  }
  r.EndDrawing();
}

function teardown() {
  r.CloseWindow();
}

function loop() {
  while (!r.WindowShouldClose()) {
    draw();
  }
}

function main() {
  setup();
  loop();
  teardown();
}

main();