const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const numArray = input[1].split(' ').map(Number)
const num = Number(input[2])

const result = numArray.filter(n => n === num).length

console.log(result)