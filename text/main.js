const r = require("raylib");

r.SetTraceLogLevel(r.LOG_NONE);
r.InitWindow(640, 400, "text");
r.SetTargetFPS(60);

let cf = 0;
const target = r.LoadRenderTexture(200, 40);

r.BeginTextureMode(target);

r.DrawText("hii", 0, 0, 40, r.DARKBLUE);
r.DrawRectangle(150, 0, 40, 40, r.GOLD);

r.EndTextureMode();

while (!r.WindowShouldClose()) {
  const source1 = {
    x: 0,
    y: 0,
    width: 150,
    height: -40,
  }
  const source2 = {
    x: 150,
    y: 0,
    width: 40,
    height: 40,
  }
  r.BeginDrawing();

  r.ClearBackground(r.WHITE);

  const drawing = [source1, source2, source2];
  const tile = [];

  for (let i = 0; i < 20; i++) {
    tile[i] = [];
    for (let j = 0; j < 20; j++) {
      tile[i][j] = drawing[((i * j) % 6 % 3)]
    }
  }
  for (let row = 0; row < 20; row++) {
    for (let column = 0; column < 20; column++) {
      const x = 40 * column;
      const y = 40 * row;
      r.DrawTextureRec(target.texture, tile[row][column], { x: x, y: y }, r.WHITE);
    }
  }

  r.EndDrawing();
}

r.CloseWindow();