const r = require("raylib");

function setup() {
  const windowWidth = 700;
  const windowHeight = 700;
  const FPS = 7;
  const waveCount = 40;

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(windowWidth, windowHeight, "waves");
  r.SetTargetFPS(FPS);

  return {
    windowWidth,
    windowHeight,
    waveCount,
    pallate: {
      0: r.WHITE,
      1: r.SKYBLUE,
      2: r.PINK,
      3: r.RED,
    },
  };
}

function chooseColor(w, i, j) {
  return w.pallate[(i + j) % 4];
}

function chooseAngle(i, j, cf) {
  return ((cf + i + j) % 2 === 1) ? { startAngle: -90, endAngle: 90 } : { startAngle: 90, endAngle: 270 };
}

function drawRing(w, cf, i, j) {
  const outerRadius = (w.windowWidth / w.waveCount) / 2;
  const innerRadius = outerRadius - Math.ceil(w.windowWidth / 600);
  const Y = (w.windowHeight / w.waveCount) / 2;
  const angle = chooseAngle(i, j, cf);
  const color = chooseColor(w, i, j);

  i >= j ? r.DrawRing({ x: outerRadius * (i * 2 - 1) + 5 * cf, y: (j * 2 - 1) * Y }, innerRadius, outerRadius, angle.startAngle, angle.endAngle, 50, color) : r.DrawRing({ x: outerRadius * (i * 2 - 1), y: (j * 2 - 1) * Y + 5 * cf }, innerRadius, outerRadius, angle.startAngle, angle.endAngle, 50, color);
}

function drawWaves(w, cf) {
  for (let j = 1; j <= w.waveCount; j++) {
    for (let i = 1; i <= w.waveCount; i++) {
      drawRing(w, cf, i, j);
    }
  }
}

function draw(w, cf) {
  r.ClearBackground(r.BLACK);
  r.BeginDrawing();
  drawWaves(w, cf);
  r.EndDrawing();
}

function loop(w) {
  let cf = 0;
  while (!r.WindowShouldClose()) {
    cf = (cf + 1) % (w.windowHeight / 5);
    draw(w, cf)
  }
}

function teardown() {
  r.CloseWindow();
}

function main() {
  const world = setup();
  loop(world);
  teardown();
}

main();