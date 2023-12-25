const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((x) => x.replace('\r', ''));
let [N, K] = n.split(' ')

let answer = 0

for (let i = N - 1; i >= 0; i--) {
    answer += parseInt(K / arr[i])
    K = K % arr[i]
}
console.log(answer)