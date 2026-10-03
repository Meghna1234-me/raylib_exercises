function isOutofBound(detectorX, detectorEnd, detectorStart, detectorWidth) {
  const end = detectorEnd - detectorWidth;
  return detectorX < detectorStart || detectorX > end;
}

function changeVelocity(detectorX, detectorStart, detectorEnd, detectorWidth, speed) {
  return isOutofBound(detectorX, detectorEnd, detectorStart, detectorWidth) ? -speed : speed;
}

function changeDetectorPosition(detectorX, detectorVelocity) {
  return detectorX + detectorVelocity;
}

function drawDetector(d) {
  drawRange(d)
}

function createDetector(x, y, width, height, color) {
  return {
    x, y, width, height, color
  }
}

module.exports = {
  isOutofBound,
  changeVelocity,
  changeDetectorPosition,
  createDetector,
};