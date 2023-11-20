const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let input = []

for (let i = 0; i < n; i++) {
    input.push(parseInt(arr[0].split(" ")[i]))
}

console.log(Math.min(...input) * Math.max(...input))