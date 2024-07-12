const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [n, m] = [+input[0].split(' ')[0], +input[0].split(' ')[1]];

const stringSet = new Set(input.slice(1, n + 1).map((x) => x.replace('\r', '')));
const inspectArr = input.slice(n + 1).map((x) => x.replace('\r', ''));
let count = 0;

for (let i = 0; i < m; i++) {
  if (stringSet.has(inspectArr[i])) {
    count++;
  }
}
console.log(count);