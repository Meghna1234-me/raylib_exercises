function compoundInterest(principal, interest, time) {
  return principal * ((1 + interest / 100) ** time);
}

console.log(compoundInterest(1000, 10, 2));