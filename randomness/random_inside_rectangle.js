const r = require("raylib");

r.SetTraceLogLevel(r.LOG_NONE);
r.InitWindow(600, 400, "random points inside circle");
r.SetTargetFPS(10);

while (!r.WindowShouldClose()) {
  r.BeginDrawing();
  const color = {
    r: 255,
    g: 255,
    b: 255,
    a: 150,
  };

  const blue = {
    r: 20,
    g: 50,
    b: 180,
    a: 100,
  };
  const x1 = 100;
  const y1 = 50;
  const x2 = 500;
  const y2 = 150;

  r.ClearBackground(blue);
  r.DrawRectangleLines(100, 50, 400, 100, r.WHITE);
  for (let i = 0; i < 500; i++) {
    let x = x1 + (x2 - x1 + 1) * Math.random();
    let y = y1 + (y2 - y1 + 1) * Math.random();
    r.DrawCircle(x, y, 5, color);
  }
  r.EndDrawing();
}

r.CloseWindow();
