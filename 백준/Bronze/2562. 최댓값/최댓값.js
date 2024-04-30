const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

const arr = input.map(Number);
const max = Math.max(...arr);
const maxNum =  arr.indexOf(max) + 1;

console.log(max);
console.log(maxNum);