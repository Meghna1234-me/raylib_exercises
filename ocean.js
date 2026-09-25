const r = require("raylib");
const windowWidth = 1000;
const windowHeight = 800;
const height = windowHeight - windowHeight / 3;
const waveY = height + 20;
let place = 0;
let x = 1;
r.InitWindow(windowWidth, windowHeight, "Raylib Demo");

r.SetTargetFPS(60);
//function waves(place) {
//  return 35 + 100 * place;
//}
//function waveCount(waveCount) {
//  if (x <= waveCount) {
//    r.BeginDrawing();
//    r.DrawRectangle(0, 0, windowWidth, windowHeight, r.SKYBLUE);
//    r.DrawRectangle(0, 0, windowWidth, height, r.WHITE);
//    r.DrawCircle(waves(place), waveY, 50, r.SKYBLUE);
//    x = x + 1;
//    place = place + 1;
//    r.EndDrawing();
//  }
//}
function move(a, b, c, d, color, place) {
  if (a === 850) {
    a = 0;
  }
  a = a + 1;
}

while (!r.WindowShouldClose()) {
  r.BeginDrawing();
  r.DrawRectangle(0, 0, windowWidth, windowHeight, r.SKYBLUE);
  r.DrawRectangle(0, 0, windowWidth, height, r.WHITE);
  r.DrawCircle(35, waveY, 50, r.SKYBLUE);
  r.DrawCircle(135, waveY, 50, r.SKYBLUE);
  r.DrawCircle(235, waveY, 50, r.SKYBLUE);
  r.DrawCircle(335, waveY, 50, r.SKYBLUE);
  r.DrawCircle(435, waveY, 50, r.SKYBLUE);
  r.DrawCircle(535, waveY, 50, r.SKYBLUE);
  r.DrawCircle(635, waveY, 50, r.SKYBLUE);
  r.DrawCircle(735, waveY, 50, r.SKYBLUE);
  r.DrawCircle(835, waveY, 50, r.SKYBLUE);
  r.DrawCircle(935, waveY, 50, r.SKYBLUE);
  r.DrawCircle(1035, waveY, 50, r.SKYBLUE);

  r.EndDrawing();
}
r.CloseWindow();
