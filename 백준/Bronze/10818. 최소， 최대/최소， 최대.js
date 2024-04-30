const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const numbers = input[1].split(' ').map(x=> Number(x)).sort((a, b) => a - b);

console.log(`${numbers[0]} ${numbers[Number(input[0]) - 1]}`);