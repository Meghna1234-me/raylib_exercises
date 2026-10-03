function decimalToBinary(n) {
  if (n === 0) {
    return "0";
  }
  return n === 1 ? 1 : `${decimalToBinary(Math.floor(n / 2))}${n % 2}`;
}

console.log(decimalToBinary(145));