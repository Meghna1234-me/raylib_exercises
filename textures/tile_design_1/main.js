const r = require("raylib");
const tile = require("./tile_designs.js");

function running() {
  return !r.WindowShouldClose();
}

function setup() {
  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(1024, 1024, "texture pattern");
  r.SetTargetFPS(60);
  const target = r.LoadRenderTexture(64, 32);

  r.BeginTextureMode(target);
  r.ClearBackground(r.WHITE);

  const v1 = { x: 0, y: 0 };
  const v2 = { x: 0, y: 32 };
  const v3 = { x: 32, y: 0 };

  const v4 = { x: 32, y: 32 };
  const v5 = { x: 64, y: 32 };
  const v6 = { x: 64, y: 0 };

  r.DrawTriangle(v1, v2, v3, r.DARKBLUE);
  r.DrawTriangle(v4, v5, v6, r.DARKBLUE);

  r.EndTextureMode();
  return {
    width: 32,
    height: 32,
    target,
  };
}

function draw(t) {
  const t1 = {
    x: 0,
    y: 0,
    width: 32,
    height: 32,
  };

  const t2 = {
    x: 32,
    y: 32,
    width: 32,
    height: 32,
  };

  const tile1 = [];
  const tile2 = [];
  const tile3 = [];
  const tile4 = [];
  const tile5 = [];
  const tile6 = [];
  const tile7 = [];
  const tile8 = [];
  const tile9 = [];
  const triangles = [t1, t2, t1];
  const triangles1 = [t2, t1];

  for (let i = 0; i < 10; i++) {
    tile1[i] = [];
    tile2[i] = [];
    tile3[i] = [];
    tile4[i] = [];
    tile5[i] = [];
    tile6[i] = [];
    tile7[i] = [];
    tile8[i] = [];
    tile9[i] = [];
    for (let j = 0; j < 10; j++) {
      tile1[i][j] = triangles[(i % 2)];
      tile2[i][j] = triangles[(j % 2)];
      tile3[i][j] = triangles[((i + j) % 2)];
      tile4[i][j] = triangles[((i + j) % 6 % 3)];
      tile5[i][j] = triangles[((i * j) % 6 % 2)];
      tile6[i][j] = triangles[((i * j) % 6 % 3)];
      tile7[i][j] = triangles[(j > i ? i % 2 : j % 2)];
      tile8[i][j] = triangles[(j > i ? j % 2 : i % 2)];
      tile9[i][j] = triangles1[(i <= j) % 2];
    }
  }

  r.BeginDrawing();
  r.ClearBackground(r.DARKBLUE);

  for (let row = 0; row < 10; row++) {
    for (let column = 0; column < 10; column++) {
      const pos1 = {
        x: 0 + t.width * column,
        y: 10 + t.height * row,
      }

      const pos2 = {
        x: 330 + t.width * column,
        y: 10 + t.height * row,
      }

      const pos3 = {
        x: 660 + t.width * column,
        y: 10 + t.height * row,
      }

      const pos4 = {
        x: 0 + t.width * column,
        y: 340 + t.height * row,
      }

      const pos5 = {
        x: 330 + t.width * column,
        y: 340 + t.height * row,
      }

      const pos6 = {
        x: 660 + t.width * column,
        y: 340 + t.height * row,
      }

      const pos7 = {
        x: 0 + t.width * column,
        y: 670 + t.height * row,
      }

      const pos8 = {
        x: 330 + t.width * column,
        y: 670 + t.height * row,
      }

      const pos9 = {
        x: 660 + t.width * column,
        y: 670 + t.height * row,
      }
      r.DrawTextureRec(t.target.texture, tile1[row][column], pos1, r.WHITE);
      r.DrawTextureRec(t.target.texture, tile2[row][column], pos2, r.WHITE);
      r.DrawTextureRec(t.target.texture, tile3[row][column], pos3, r.WHITE);
      r.DrawTextureRec(t.target.texture, tile4[row][column], pos4, r.WHITE);
      r.DrawTextureRec(t.target.texture, tile5[row][column], pos5, r.WHITE);
      r.DrawTextureRec(t.target.texture, tile6[row][column], pos6, r.WHITE);
      r.DrawTextureRec(t.target.texture, tile7[row][column], pos7, r.WHITE);
      r.DrawTextureRec(t.target.texture, tile8[row][column], pos8, r.WHITE);
      r.DrawTextureRec(t.target.texture, tile9[row][column], pos9, r.WHITE);
    }
  }
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