const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = n.split(' ').map(Number)

let array = arr[0].split(' ').map(Number)

// for(let i of arr)
// for(let i = 0; i<n[0]; i++)

// N = 카드수 ,M = 최대수
// M에 최대한 가까운 카드 3장의 합
// ex [5 21] [5 6 7 8 9]

// [0][1][2] 5 6 7 = 18
// [0][1][3] 5 6 8 = 19
// [0][1][4] 5 6 9 = 20
// [0][2][3] 5 7 8 = 20
// [0][2][4] 5 7 9 = 21
// [0][3][4] 5 8 9 = 22
let cases = []
for (let i = 0; i < N - 2; i++) {
    for (let j = i + 1; j < N - 1; j++) {
        for (let k = j + 1; k < N; k++) {
            sum = array[i] + array[j] + array[k]
            cases.push(sum)
        }
    }
}


cases.sort((a, b) => a - b)
let result = 0
for (i of cases) {
    if (i <= M) {
        result = i
    }
}
console.log(result)