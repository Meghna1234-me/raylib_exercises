const r = require("raylib");
const windowWidth = 800;
const windowHeight = 400;

const outerRecWidth = 200;
const outerRecHeight = 100;
const innerRecWidth = 1;
const innerRecHeight = 1;

r.InitWindow(windowWidth, windowHeight, "center rectangle");
r.SetTargetFPS(60);

function calculateCenter(outerDimension, innerDimension) {
  return (outerDimension - innerDimension) / 2;
}

function scaleRect(n, i) {
  return n * i;
}

while (!r.WindowShouldClose()) {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  r.DrawRectangle(
    calculateCenter(windowWidth, outerRecWidth),
    calculateCenter(windowHeight, outerRecHeight),
    outerRecWidth,
    outerRecHeight,
    r.RED,
  );
  r.DrawRectangle(
    calculateCenter(windowWidth, scaleRect(outerRecWidth, innerRecWidth)),
    calculateCenter(windowHeight, scaleRect(outerRecHeight, innerRecHeight)),
    scaleRect(outerRecWidth, innerRecWidth),
    scaleRect(outerRecHeight, innerRecHeight),
    r.PINK,
  );

  r.EndDrawing();
}
r.CloseWindow();
