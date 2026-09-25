const r = require("raylib");
const windowWidth = 1000;
const windowHeight = 800;
const sourceX = windowWidth / 4;
const sourecY = windowHeight / 2;
const target1X = windowWidth / 2;
const target1Y = 0;
const target2X = windowWidth / 4;
const target2Y = 0;
r.InitWindow(windowWidth, windowHeight, "source and target");

r.SetTargetFPS(60);

function calculateDistance(X1, Y1, X2, Y2) {
  return Math.sqrt((X2 - X1) ** 2 + (Y2 - Y1) ** 2);
}

function drawLine(X0, Y0, X1, Y1, X2, Y2) {
  if (calculateDistance(X0, Y0, X1, Y1) === calculateDistance(X0, Y0, X2, Y2)) {
    r.DrawLine(X0, Y0, X1, Y1, r.WHITE);
    r.DrawLine(X0, Y0, X2, Y2, r.WHITE);
  }
  return calculateDistance(X0, Y0, X1, Y1) < calculateDistance(X0, Y0, X2, Y2)
    ? r.DrawLine(X0, Y0, X1, Y1, r.WHITE)
    : r.DrawLine(X0, Y0, X2, Y2, r.WHITE);
}

while (!r.WindowShouldClose()) {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);
  r.DrawCircle(sourceX, sourecY, 30, r.YELLOW);
  r.DrawCircle(target1X, target1Y, 30, r.RED);
  r.DrawCircle(target2X, target2Y, 30, r.PINK);
  drawLine(sourceX, sourecY, target1X, target1Y, target2X, target2Y);

  r.EndDrawing();
}
r.CloseWindow();
