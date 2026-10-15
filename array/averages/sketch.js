const r = require("raylib");

function running() {
  return !r.WindowShouldClose();
}

function setup() {
  const windowWidth = 600;
  const windowHeight = 400;
  const gap = 0;
  const barWidth = 2;
  const array = [100, 50, 25, 10, 200, 200, 500, 34, 5, 456, 84, 10, 93, 45, 100, 50, 25, 150, 20, 200, 500, 34, 58, 46, 84, 10, 323, 45, 100, 50, 25, 10, 230, 200, 500, 34, 55, 46, 84, 10, 3, 45, 100, 50, 25, 10, 20, 200, 500, 34, 590, 46, 84, 10, 3, 45, 100, 50, 25, 10, 20, 200, 500, 34, 5, 46, 84, 10, 3, 45];
  const ratio = ((windowHeight * 90) / 100) / getMaxValue(array);

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(windowWidth, windowHeight, "graph");
  r.SetTargetFPS(60);

  return {
    windowWidth,
    windowHeight,
    gap,
    barWidth,
    array,
    ratio,
  };
}

function update() {
  //change the state
}

function sum(array) {
  let sum = 0;
  for (const number of array) {
    sum += number;
  }
  return sum;
}

function findAverage(array) {
  return sum(array) / array.length;
}

function getMaxValue(array) {
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    max = Math.max(max, array[i])
  }
  return max;
}

function getRectObject(w) {
  const graphInfo = {};

  for (let i = 0; i < w.array.length; i++) {
    graphInfo[i] = barInfo(i, w);
  }
  return graphInfo;
}

function barInfo(i, w) {
  const barX = i * (w.barWidth + w.gap);
  const barHeight = Math.ceil(w.array[i] * w.ratio);
  const barY = 400 - barHeight;
  const barWidth = w.barWidth;

  return {
    barX,
    barY,
    barWidth,
    barHeight,
  };
}

function drawBar(i, graphInfo) {
  r.DrawRectangle(graphInfo[i].barX, graphInfo[i].barY, graphInfo[i].barWidth, graphInfo[i].barHeight, r.BLUE);
}

function drawAverageLine(w) {
  const lineStart = { x: 0, y: w.windowHeight - Math.ceil(findAverage(w.array) * w.ratio) };
  const lineEnd = { x: w.windowWidth, y: w.windowHeight - Math.ceil(findAverage(w.array) * w.ratio) };

  r.DrawLineV(lineStart, lineEnd, r.RED);
}

function drawGraph(w) {
  const graphInfo = getRectObject(w);

  for (let i = 0; i < w.array.length; i++) {
    drawBar(i, graphInfo);
  }
  drawAverageLine(w);
}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.WHITE);
  drawGraph(w);
  r.EndDrawing();
}

function teardown() {
  r.CloseWindow();
}

module.exports = {
  running,
  setup,
  update,
  draw,
  teardown,
};