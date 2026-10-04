const r = require("raylib");

function drawRange(d) {
  r.DrawRectangle(d.x, d.y, d.width, 200, d.color);
}

function chooseColor(d, f1, f2) {
  return (fieldsOverlap(d, f1, f2)) ? r.RED : r.WHITE;
}

function fieldsOverlap(d, f1, f2) {
  return isOverlapping(d, f1) || isOverlapping(d, f2);
}

function isOverlapping(d, f1) {
  return !(d.End < f1.x || d.x > f1.end);
}

module.exports = {
  chooseColor,
  drawRange,
}