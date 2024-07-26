const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

input.shift(0);
let maxNum = Math.max(...input);
const number = input.map(Number);
let result = [];

let arr = Array(maxNum + 1)
  .fill(true)
  .fill(false, 0, 2);

for (let i = 2; i * i <= maxNum; i++) {
  if (arr[i]) {
    for (let j = i * i; j <= maxNum; j += i) {
      arr[j] = false;
    }
  }
}

for (let value of number) {
  let count = 0;

  for (let i = 2; i <= value / 2; i++) {
    if (arr[i] && arr[value - i]) count++;
  }
  result.push(count);
}

console.log(result.join("\n"));