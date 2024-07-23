const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

function gcd(a, b) {
  let r = 0;
  while (b !== 0) {
    r = a % b;
    a = b;
    b = r;
  }
  return a;
}

input.sort((a, b) => b - a);
console.log((input[0] * input[1]) / gcd(input[0], input[1]));