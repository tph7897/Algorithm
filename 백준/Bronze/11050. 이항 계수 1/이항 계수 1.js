const [N, K] = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ").map(el => Number(el))

let nfac = 1
let rfac = 1
let n_rfac = 1

for (let i = 1; i <= N; i++) {
    nfac = nfac * i
}

for (let i = 1; i <= K; i++) {
    rfac = rfac * i
}

for (let i = 1; i <= N - K; i++) {
    n_rfac = n_rfac * i
}
let answer = nfac / (rfac * n_rfac)
console.log(answer)