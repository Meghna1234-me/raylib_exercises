const sketch = require("./sketch");

function loop(w) {
  while (sketch.running()) {
    sketch.update();
    sketch.draw(w);
  }
}

function main() {
  w = sketch.setup();
  loop(w);
  sketch.teardown();
}

main();