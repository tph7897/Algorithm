const [n, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((x) => x.replace('\r', ''))
for (let i = 0; i < n; i++) {
    let [N, M] = input[i].split(' ').map(Number)
    console.log(Math.round(fac(N, M)))
}
// n! / r!(n-r)!
function fac(N, M) {
    let nfac = 1
    let rfac = 1
    let n_rfac = 1

    for (let i = 1; i <= N; i++) {
        nfac = nfac * i
    }
    for (let j = 1; j <= M; j++) {
        rfac = rfac * j
    }
    for (let k = 1; k <= M - N; k++) {
        n_rfac = n_rfac * k
    }
    return rfac / (nfac * n_rfac)
}