const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const max = Number(input[0]);
let answer = '';

for (let i = 1; i <= max; i++) {
    const num = input[i].split(' ');
    answer += Number(num[0]) + Number(num[1]) + "\n";
}

console.log(answer);