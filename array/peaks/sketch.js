const r = require("raylib");

function running() {
  return !r.WindowShouldClose();
}

function setup() {
  const windowWidth = 1000;
  const windowHeight = 200;
  const gap = 15;
  const radius = 4;
  const array = [100, 50, 25, 10, 200, 200, 500, 34, 5, 456, 84, 10, 93, 45, 100, 50, 25, 150, 20, 200, 500, 34, 58, 46, 84, 10, 323, 45, 100, 50, 25, 10, 230, 200, 500, 34, 55, 46, 84, 10, 3, 45, 100, 50, 25, 10, 20, 200, 500, 34, 590, 46, 84, 10, 3, 45, 100, 50, 25, 10, 20, 200, 500, 34, 5, 46, 84, 10, 3, 45];
  const ratio = ((windowHeight * 90) / 100) / getMaxValue(array);

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(windowWidth, windowHeight, "graph");
  r.SetTargetFPS(60);

  return {
    windowWidth,
    windowHeight,
    gap,
    radius,
    array,
    ratio,
  };
}

function getPeaks(array) {
  const peak = [];
  for (let i = 1; i < array.length - 1; i++) {
    if (isPeak(i, array)) {
      peak.push(i);
    }
  }
  return peak;
}

function getMaxValue(array) {
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    max = Math.max(max, array[i])
  }
  return max;
}

function getPointObject(w) {
  const graphInfo = {};

  for (let i = 0; i < w.array.length; i++) {
    graphInfo[i] = pointInfo(i, w);
  }
  return graphInfo;
}

function pointInfo(i, w) {
  const pointX = i * w.gap;
  const pointY = w.windowHeight - Math.ceil(w.array[i] * w.ratio);
  const radius = w.radius;

  return {
    pointX,
    pointY,
    radius,
  };
}

function isPeak(i, array) {
  return array[i] > array[i - 1] && array[i] > array[i + 1];
}

function drawPeak(i, peaks, graphInfo, radius) {
  if (peaks.includes(i)) {
    r.DrawCircle(graphInfo[i].pointX, graphInfo[i].pointY, radius, r.RED);
  }
}

function drawpoint(i, graphInfo) {
  const graph = graphInfo;
  const next = i + 1;
  r.DrawLine(graph[i].pointX, graph[i].pointY, graph[next].pointX, graph[next].pointY, r.BLACK);
}

function drawGraph(w) {
  const graphInfo = getPointObject(w);
  const peaks = getPeaks(w.array);

  for (let i = 0; i < w.array.length - 1; i++) {
    drawpoint(i, graphInfo);
    drawPeak(i, peaks, graphInfo, w.radius);
  }
}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.RAYWHITE);
  drawGraph(w);
  r.EndDrawing();
}

function teardown() {
  r.CloseWindow();
}

module.exports = {
  running,
  setup,
  draw,
  teardown,
};