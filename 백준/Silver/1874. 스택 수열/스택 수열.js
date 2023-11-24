const [n, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let stack = []
let stackNum = 1;
let answer = []

for(let i = 0 ; i<n; i++){
while(stackNum<= input[i]){
    stack.push(stackNum);
    stackNum++
    answer.push("+")
}
let popNum = stack.pop();
answer.push("-")
if(popNum !== input[i]){
    answer = ["NO"]
    break;
}

}

console.log(answer.join('\n'))