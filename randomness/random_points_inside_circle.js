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
    r: 50,
    g: 150,
    b: 250,
    a: 100,
  }
  for (let i = 0; i < 200; i++) {
    const radii = 151 * Math.random();
    const theta = 361 * Math.random();
    const x = 300 + radii * Math.cos(theta * (Math.PI / 180));
    const y = 200 + radii * Math.sin(theta * (Math.PI / 180));
    r.DrawCircle(x, y, 10, color);
  }

  r.ClearBackground(blue);
  r.DrawCircleLines(300, 200, 150, r.WHITE);
  r.EndDrawing();
}

r.CloseWindow();
