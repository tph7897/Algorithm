const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const total = +input[0];
const cnt = +input[1];
let sum = 0;

for(let i=2; i<=cnt+1; ++i){
    let newArr = input[i].split(" ").map(item=>Number(item));
    sum += newArr[0] * newArr[1];
}

console.log(total === sum ? "Yes" : "No");