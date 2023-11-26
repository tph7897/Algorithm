const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let a = input[0]    // 아침에 올라가는 높이 5
let b = input[1]    // 밤에 미끄러지는 높이 1
let c = input[2]    // 높이 6

console.log(Math.ceil((c-a)/(a-b)+1))