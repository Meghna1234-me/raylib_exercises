const r = require("raylib");

function running() {
  return !r.WindowShouldClose();
}

function setup() {
  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(980, 1000, "texture pattern");
  r.SetTargetFPS(60);
  const target = r.LoadRenderTexture(64, 32);

  r.BeginTextureMode(target);
  r.ClearBackground(r.WHITE);

  r.DrawTriangle({ x: 0, y: 0 }, { x: 0, y: 32 }, { x: 32, y: 0 }, r.DARKBLUE);
  r.DrawTriangle({ x: 32, y: 32 }, { x: 64, y: 32 }, { x: 64, y: 0 }, r.DARKBLUE);

  r.EndTextureMode();

  return { width: 32, height: 32, target, };
}

function getTexture(tile, row, column) {
  const texture = [
    (row % 2),
    (column % 2),
    ((row + column) % 2),
    ((row + column) % 6 % 3),
    ((row * column) % 6 % 2),
    ((row * column) % 6 % 3),
    (column > row ? column % 2 : row % 2),
    (column > row ? row % 2 : column % 2),
    (row <= column ? 0 : 1),
  ]

  return texture[tile];
}

function draw(t) {

  const t1 = { x: 0, y: 0, width: 32, height: 32, };
  const t2 = { x: 32, y: 32, width: 32, height: 32, };

  const textures = [t1, t2, t1];

  r.BeginDrawing();
  r.ClearBackground(r.DARKBLUE);
  const texture = t.target.texture;
  for (let tile = 0; tile < 9; tile++) {
    for (let row = 0; row < 10; row++) {
      for (let column = 0; column < 10; column++) {
        const y = 10 + Math.floor(tile / 3) * 330 + t.height * row;
        const x = 10 + (tile % 3) * 330 + t.width * column;
        r.DrawTextureRec(texture, textures[getTexture(tile, row, column)], { x, y }, r.WHITE);
      }
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