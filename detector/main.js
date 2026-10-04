const sketch = require("./sketch");

function loop(world) {
  while (sketch.running()) {
    sketch.update(world);
    sketch.draw(world);
  }
}

function main() {
  let world = sketch.setup();
  loop(world);
  sketch.teardown();
}

main();