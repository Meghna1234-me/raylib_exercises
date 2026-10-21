const r = require("raylib");
const tile = require("./tile_designs.js");

function running() {
  return !r.WindowShouldClose();
}

function setup() {

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(740, 770, "texture pattern");
  r.SetTargetFPS(60);
  const target = r.LoadRenderTexture(30, 30);

  r.BeginTextureMode(target);
  r.ClearBackground(r.GOLD);
  const v1 = { x: 0, y: 0 };
  const v2 = { x: 0, y: 30 };
  const v3 = { x: 30, y: 0 };

  r.DrawTriangle(v1, v2, v3, r.MAROON);

  r.EndTextureMode();
  return {
    width: 30,
    height: 30,
    target,
  };
}

function draw(t) {
  const source = {
    x: 0,
    y: 0,
    width: -30,
    height: -30
  };
  r.BeginDrawing();
  r.ClearBackground(r.GOLD);

  tile.drawTile1(8, 8, 0, 10, t, source);
  tile.drawTile2(8, 8, 250, 10, t, source);
  tile.drawTile3(8, 8, 500, 10, t, source);
  tile.drawTile4(8, 8, 0, 260, t, source);
  tile.drawTile5(8, 8, 250, 260, t, source);
  tile.drawTile6(8, 8, 500, 260, t, source);
  tile.drawTile7(8, 8, 0, 510, t, source);
  tile.drawTile8(8, 8, 250, 510, t, source);
  tile.drawTile9(8, 8, 500, 510, t, source);

  r.EndDrawing();
}

function teardown() {
  r.CloseWindow();
}

function loop(t) {
  while (running()) {
    draw(t);
  }
}

function main() {
  const t = setup();
  loop(t);
  teardown();
}

main();