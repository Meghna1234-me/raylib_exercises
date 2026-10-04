function createDetector(lower, upper, velocity) {
  return {
    width: 20,
    height: 200,
    X: 0,
    Y: 0,
    start: lower,
    edge: upper,
    speed: velocity,
  };
}

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

function update(d) {

}

module.exports = {
  isOutofBound,
  changeVelocity,
  changeDetectorPosition,
  createDetector,
};