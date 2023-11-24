const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((x) => x.replace('\r', ''));
// 최소공배수 = 두 자연수를 곱하고 / 최대공약수

function GCD(b, a) {
    while (b % a !== 0) {
        let result = a % b; // 78696 % 19332 = 1368
        a = b; //a = 19332
        b = result; // b = 1368
    }
    return a;
}

let max = 0;
for (i of arr) {
    let array = i.split(' ').map(Number)
    max = GCD(array[0], array[1])
    console.log(array[0] * array[1] / max)
}