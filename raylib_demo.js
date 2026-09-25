const r = require("raylib");
r.InitWindow(500, 300, "Raylib Demo");

r.SetTargetFPS(60);

while (!r.WindowShouldClose()) {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);
  r.DrawRectangle(10, 10, 100, 100, r.YELLOW);
  r.DrawRectangle(10, 10, 75, 75, r.GREEN);
  r.DrawRectangle(10, 10, 50, 50, r.RED);
  r.DrawRectangle(10, 10, 25, 25, r.BLUE);
  r.EndDrawing();
}
r.CloseWindow();
