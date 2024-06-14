let input = require('fs').readFileSync('/dev/stdin').toString().split(" ").map((el) => +el); 
const [x, y, w, h] = input;

const array = [x, w-x, y, h-y];
const answer = Math.min(...array);
console.log(answer);