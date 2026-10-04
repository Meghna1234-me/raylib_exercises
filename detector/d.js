const r = require("./range.js");

function createDetector(x, y, lower, upper, velocity) {
  return {
    x: x,
    y: y,
    start: lower,
    edge: upper,
    velocity: velocity,
    width: 20,
    height: 200,
  };
}

function isOutofBound(d) {
  const end = d.edge - d.width;
  return d.x < d.start || d.x > end;
}

function changeVelocity(d) {
  return isOutofBound(d) ? -d.velocity : d.velocity;
}

function changeDetectorPosition(d) {
  return d.x + d.velocity;
}

function drawDetector(d) {
  r.drawRange(d);
}

function update(d, f1, f2) {
  d.velocity = changeVelocity(d);
  d.x = changeDetectorPosition(d);
  d.End = d.x + d.width;
  d.color = r.chooseColor(d, f1, f2)
  return d;
}

module.exports = {
  createDetector,
  drawDetector,
  update,
};