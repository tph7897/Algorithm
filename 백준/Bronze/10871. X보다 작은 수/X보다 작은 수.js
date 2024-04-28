const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const max = Number(input[0].split(' ')[1]);

const answer = input[1].split(' ').map(x => Number(x)).filter(v => max > v); 

console.log(answer.join(' '));