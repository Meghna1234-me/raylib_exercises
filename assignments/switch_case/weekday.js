// const day = 1;
// const day = 2;
// const day = 3;
// const day = 4;
const day = 5;
// const day = 6;
// const day = 7;

switch (day) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Weekday");
    break;
  case 6:
  case 7:
    console.log("Weekend");
    break;
  default:
    console.log("invalid day");
}