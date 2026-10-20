const r = require("raylib");

function running() {
  return !r.WindowShouldClose();
}

function setup() {

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(740, 770, "texture pattern");
  r.SetTargetFPS(60);
  const target = r.LoadRenderTexture(30, 30);


  r.BeginTextureMode(target);

  r.ClearBackground(r.WHITE);
  const v1 = { x: 0, y: 0 };
  const v2 = { x: 0, y: 30 };
  const v3 = { x: 30, y: 0 };
  r.DrawTriangle(v1, v2, v3, r.BLUE);

  r.EndTextureMode();
  return target;
}

function update() {

}

function chooseTextures(row, column, t) {
  const source = {
    x: 0,
    y: 0,
    width: -30,
    height: -30
  };
  if (row % 2 === 0) {
    r.DrawTexture(t.texture, 30 * column, 10 + 30 * row, r.WHITE);
  } else {
    r.DrawTextureRec(t.texture, source, { x: (30 * column), y: 10 + 30 * row }, r.WHITE);
  }
}

function draw(t) {

  const source = {
    x: 0,
    y: 0,
    width: -30,
    height: -30
  };
  r.BeginDrawing();

  r.ClearBackground(r.BLUE);

  for (let row = 0; row < 8; row++) {
    for (let column = 0; column < 8; column++) {
      chooseTextures(row, column, t);
    }
  }

  for (let row = 0; row < 8; row++) {
    for (let column = 0; column < 8; column++) {
      if (column % 2 === 0) {
        r.DrawTexture(t.texture, 250 + 30 * column, 10 + 30 * row, r.WHITE);

      } else {
        r.DrawTextureRec(t.texture, source, { x: 250 + ((30 * column)), y: 10 + 30 * row }, r.WHITE);
      }
    }
  }

  for (let row = 0; row < 8; row++) {
    for (let column = 0; column < 8; column++) {
      (row + column) % 2 === 0 ? r.DrawTexture(t.texture, 500 + 30 * column, 10 + 30 * row, r.WHITE) : r.DrawTextureRec(t.texture, source, { x: 500 + (30 * column), y: 10 + 30 * row }, r.WHITE);
    }
  }

  for (let row = 0; row < 8; row++) {
    for (let column = 0; column < 8; column++) {
      if ((row + column) % 6 % 3 === 0) {
        r.DrawTexture(t.texture, 30 * column, 260 + 30 * row, r.WHITE);
      }
      if ((row + column) % 6 % 3 === 1) {
        r.DrawTextureRec(t.texture, source, { x: (30 * column), y: 260 + 30 * row }, r.WHITE);
      }
      if ((row + column) % 6 % 3 === 2) {
        r.DrawTexture(t.texture, 30 * column, 260 + 30 * row, r.WHITE);
      }
    }
  }

  for (let row = 0; row < 8; row++) {
    for (let column = 0; column < 8; column++) {
      if ((row * column) % 6 % 2 === 0) {
        r.DrawTexture(t.texture, 250 + 30 * column, 260 + 30 * row, r.WHITE);
      }
      if ((row * column) % 6 % 2 === 1) {
        r.DrawTextureRec(t.texture, source, { x: 250 + (30 * column), y: 260 + 30 * row }, r.WHITE);
      }
    }
  }

  for (let row = 0; row < 8; row++) {
    for (let column = 0; column < 8; column++) {
      if ((row * column) % 6 % 3 === 0) {
        r.DrawTexture(t.texture, 500 + 30 * column, 260 + 30 * row, r.WHITE);
      }
      if ((row * column) % 6 % 3 === 1) {
        r.DrawTextureRec(t.texture, source, { x: 500 + (30 * column), y: 260 + 30 * row }, r.WHITE);
      }
      if ((row * column) % 6 % 3 === 2) {
        r.DrawTexture(t.texture, 500 + 30 * column, 260 + 30 * row, r.WHITE);
      }
    }
  }

  for (let row = 0; row < 8; row++) {
    for (let column = 0; column < 8; column++) {
      if ((row * column) % 6 % 3 === 0) {
        r.DrawTexture(t.texture, 500 + 30 * column, 260 + 30 * row, r.WHITE);
      }
      if ((row * column) % 6 % 3 === 1) {
        r.DrawTextureRec(t.texture, source, { x: 500 + (30 * column), y: 260 + 30 * row }, r.WHITE);
      }
      if ((row * column) % 6 % 3 === 2) {
        r.DrawTexture(t.texture, 500 + 30 * column, 260 + 30 * row, r.WHITE);
      }
    }
  }

  for (let row = 0; row < 8; row++) {
    for (let column = 0; column < 8; column++) {
      if (column > row) {
        if (column % 2 === 0) {
          r.DrawTexture(t.texture, 30 * column, 510 + 30 * row, r.WHITE);

        } else {
          r.DrawTextureRec(t.texture, source, { x: ((30 * column)), y: 510 + 30 * row }, r.WHITE);
        }
      } else {
        if (row % 2 === 0) {
          r.DrawTexture(t.texture, 30 * column, 510 + 30 * row, r.WHITE);
        } else {
          r.DrawTextureRec(t.texture, source, { x: (30 * column), y: 510 + 30 * row }, r.WHITE);
        }
      }
    }
  }

  for (let row = 0; row < 8; row++) {
    for (let column = 0; column < 8; column++) {
      if (column > row) {
        if (row % 2 === 0) {
          r.DrawTexture(t.texture, 250 + 30 * column, 510 + 30 * row, r.WHITE);
        } else {
          r.DrawTextureRec(t.texture, source, { x: 250 + (30 * column), y: 510 + 30 * row }, r.WHITE);
        }
      } else {
        if (column % 2 === 0) {
          r.DrawTexture(t.texture, 250 + 30 * column, 510 + 30 * row, r.WHITE);

        } else {
          r.DrawTextureRec(t.texture, source, { x: 250 + ((30 * column)), y: 510 + 30 * row }, r.WHITE);
        }
      }
    }
  }

  for (let row = 0; row < 8; row++) {
    for (let column = 0; column < 8; column++) {
      if (column > row) {
        r.DrawTexture(t.texture, 500 + 30 * column, 510 + 30 * row, r.WHITE);
      } else {
        r.DrawTextureRec(t.texture, source, { x: 500 + (30 * column), y: 510 + 30 * row }, r.WHITE);
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
    update();
    draw(t);
  }
}

function main() {
  const t = setup();
  loop(t);
  teardown();
}

main();