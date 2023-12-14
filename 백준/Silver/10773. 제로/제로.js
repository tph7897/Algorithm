const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((x) => x.replace('\r', ''));

let stack = [];

for (let i = 0; i < n; i++) {

    if (Number(arr[i]) === 0) {
        stack.pop();
    }
    else {
        stack.push(Number(arr[i]))
    }
}

let result = 0;

for (let i = 0; i < stack.length; i += 1) {
    result += stack[i];
}

console.log(result);