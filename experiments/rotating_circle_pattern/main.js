const r = require("raylib");

r.SetTraceLogLevel(r.LOG_NONE);
r.InitWindow(600, 600, "circle");
r.SetTargetFPS(60);

let cf = 0;

while (!r.WindowShouldClose()) {
  r.BeginDrawing();
  r.ClearBackground(r.WHITE);
  const radi = 250;
  cf += 0.5;
  let angle = 30 + cf;
  let angle1 = 30 - cf;

  for (let i = 0; i < 36; i++) {
    let x = 300 + radi * Math.cos(angle * (Math.PI / 180));
    let y = 300 + radi * Math.sin(angle * (Math.PI / 180));
    r.DrawCircle(x, y, 4, r.GOLD);
    const cx = 300 + 280 * Math.cos(angle1 * (Math.PI / 180));
    const cy = 300 + 280 * Math.sin(angle1 * (Math.PI / 180));
    r.DrawCircle(cx, cy, 6, r.RED);
    r.DrawLineEx({ x: cx, y: cy }, { x, y }, 2, r.BLACK);
    angle += 10;
    angle1 += 10;
  }
  r.EndDrawing();
}

r.CloseWindow();