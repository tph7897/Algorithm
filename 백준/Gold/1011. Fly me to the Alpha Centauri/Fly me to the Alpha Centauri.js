const fs = require('fs')
let [count, ...input] = fs.readFileSync('/dev/stdin').toString().split('\n').map((x) => x.replace('\r', ''));

// const input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map((x) => x.replace('\r', ''));
// let T = input.shift();

for (let i = 0; i < count; i++) {
    let D = (input[i].split(" ")[1] - input[i].split(" ")[0])
    console.log(Math.ceil(Math.sqrt(D) * 2) - 1)
}