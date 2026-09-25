const r = require("raylib");
const windowWidth = 800;
const windowHeight = 400;

const outerRecWidth = 200;
const outerRecHeight = 100;
const innerRecWidth = 50;
const innerRecHeight = 50;

r.InitWindow(windowWidth, windowHeight, "center rectangle");
r.SetTargetFPS(60);

function calculateCenter(outerDimension, innerDimension) {
  return (outerDimension - innerDimension) / 2;
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
    calculateCenter(windowWidth, innerRecWidth),
    calculateCenter(windowHeight, innerRecHeight),
    innerRecWidth,
    innerRecHeight,
    r.YELLOW,
  );

  r.EndDrawing();
}
r.CloseWindow();
