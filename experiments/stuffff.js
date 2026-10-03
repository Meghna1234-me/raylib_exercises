const r = require("raylib");
r.InitWindow(1000, 800, "circle");
r.SetTargetFPS(60);
let x = 10;
const innerRadius = 0.7;
while (!r.WindowShouldClose()) {
  if (x === 1100) {
    x = 10;
  }
  x = x + 2;
  r.BeginDrawing();
  r.ClearBackground(r.WHITE);

  r.DrawCircle(500, 400, x, r.PINK);
  r.DrawCircle(500, 400, x * 0.8, r.BLUE);
  r.DrawCircle(500, 400, x * 0.6, r.GREEN);
  r.EndDrawing();
}
r.CloseWindow();
