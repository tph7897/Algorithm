const inputs = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

const voca = inputs[0].toString();

console.log(voca[Number(inputs[1])-1])