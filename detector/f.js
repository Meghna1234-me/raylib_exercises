const r = require("./range.js")

function createField(x, y, width, color) {
  return {
    x: x,
    y: y,
    width: width,
    end: x + width,
    color: color,
  };
}

function drawField(f) {
  r.drawRange(f);
}

module.exports = {
  createField,
  drawField,
}
