const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((x) => Number(x.replace('\r', '')))

for (let i = 0; i < n; i++) {
    let zero = 1
    let one = 0
    for (let j = 1; j <= arr[i]; j++) {
        let num = zero
        zero = one
        one = num + one
    }
    console.log(zero + ' ' + one)
}