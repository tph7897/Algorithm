const inputs = require('fs').readFileSync('/dev/stdin').toString().split(' ');
const number = Number(inputs[0]);
const base = Number(inputs[1]);
console.log(number.toString(base).toUpperCase());