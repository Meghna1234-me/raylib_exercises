function check(n) {
  return n <= 2 ? "finished" : printEven(n - 1);
}
function printEven(n) {
  return n % 2 === 0 ? `${n} \n${check(n)}` : printEven(n - 1);
}

console.log(printEven(0));