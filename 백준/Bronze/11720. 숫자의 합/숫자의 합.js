const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const sum = input[1].split('').reduce((acc, v) => {
    return acc += v * 1;
}, 0);

console.log(sum);