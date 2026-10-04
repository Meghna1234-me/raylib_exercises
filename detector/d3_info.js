const windowWidth = 400;
const windowHeight = 200;
let X = 0;
let Y = 0;
const End = windowHeight;
const Width = windowWidth;
const Height = 20;
let Velocity = 1;
const Start = 0;

const f3X = 0;
const f3Y = windowHeight / 3;
const f3Width = windowWidth;
const f3Height = 30;
const f3End = f3Y + f3Height;

let d3Color = chooseColor(d3.Y, d3End, f3Y, f3End);
let d3End = d3.Y + d3.Height;
drawField(f3X, f3Y, f3Width, f3Height, r.SKYBLUE);
drawDetector(d3.X, d3.Y, d3.Width, d3.Height, d3Color);
