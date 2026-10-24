const sketch = require("./sketch");

function loop() {
  let cf = 0;
  while (sketch.running()) {
    cf += 0.2
    sketch.update();
    sketch.draw(cf);
  }
}

function main() {
  sketch.setup();
  loop();
  sketch.teardown();
}

main();