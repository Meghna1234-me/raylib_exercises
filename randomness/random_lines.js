const r = require("raylib");

r.SetTraceLogLevel(r.LOG_NONE);
r.InitWindow(600, 400, "random lines");
r.SetTargetFPS(10);

while (!r.WindowShouldClose()) {
  r.BeginDrawing();
  // r.ClearBackground(r.BLACK);
  const startx = 100 * Math.random();
  const starty = 0;
  const endx = 100 + (200 - 100) * Math.random();
  const endx2 = 200 + (300 - 200) * Math.random();
  const endx3 = 300 + (400 - 300) * Math.random();
  const endx4 = 400 + (500 - 400) * Math.random();
  const endx5 = 500 + (600 - 500) * Math.random();
  const endy = 400;
  r.DrawLine(startx, starty, startx, endy, r.GREEN);
  r.DrawLine(endx, starty, endx, endy, r.BLUE);
  r.DrawLine(endx2, starty, endx2, endy, r.RED);
  r.DrawLine(endx3, starty, endx3, endy, r.YELLOW);
  r.DrawLine(endx4, starty, endx4, endy, r.ORANGE);
  r.DrawLine(endx5, starty, endx5, endy, r.BROWN);
  r.EndDrawing();
}

r.CloseWindow();
