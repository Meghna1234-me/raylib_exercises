const sketch = require("./sketch");

function loop(world) {
  let cf = 0;
  while (sketch.running()) {
    cf++
    sketch.update();
    sketch.draw(world, cf);
  }
}

function main() {
  const world = sketch.setup();
  loop(world);
  sketch.teardown();
}

main();