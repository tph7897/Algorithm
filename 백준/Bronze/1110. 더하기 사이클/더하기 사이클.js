const input = Number(require('fs').readFileSync('/dev/stdin').toString())

let i = input
let j = 0

while (true) {
    let sum = Math.floor(i / 10) + i % 10;
    i = (i % 10) * 10 + sum % 10
    j++
    if (input === i){
    break
}
}
console.log(j)