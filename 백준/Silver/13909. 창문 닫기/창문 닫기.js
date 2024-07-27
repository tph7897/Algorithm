const input = require("fs").readFileSync("dev/stdin").toString().trim();

const n = parseInt(input);

let result = 0;

for (i = 1; i * i <= n; i++) {
  result++;
}

console.log(result);