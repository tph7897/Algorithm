const input = require("fs").readFileSync("/dev/stdin").toString().split("\n").map(Number);
let newArr = "";

for (i = 0; i < 30; i++) {
  if (input.indexOf(i + 1) < 0) {
    newArr += i + 1 + "\n";
  }
}

console.log(newArr);