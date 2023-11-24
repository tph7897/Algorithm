const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
// N = M + (a+b+c)
// M + (a+b+c) = N
// 256 = M + (a+b+c)
// 245 + 0 2 9

// 216 = 198 + 1 + 9 + 8

// 256 = 245 + 2 + 4 + 5

let start = input - (String(input).length * 9)
let num = 0
function digitSum(n) {
    return [...(n + '')].reduce((pre, cur) => pre + +cur, 0);
}
if (start < 0) {
    num = 0
} else {
    num = start
}
let numsum = 0
let result = []
while (num < input) {
    num++
    let sum = digitSum(num)
    numsum = num + sum

    if (numsum === input) {
        result.push(num)
    }
}
if (result.length === 0) {
    console.log(0)
} else {

    console.log(Math.min(...result))
}