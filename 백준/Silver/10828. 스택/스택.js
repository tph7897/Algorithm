const fs = require('fs')
let [count, ...input] = fs.readFileSync('/dev/stdin').toString().split('\n').map((x) => x.replace('\r', ''));


let stack = [];
let result = [];

for (let i = 0; i < count; i++) {

    switch (input[i]) {   //input의 i번째가 'pop', 'size', 'top', 'empty' 인지 판별
        case 'pop':
            if (stack.length == 0) {
                result[result.length] = -1
            }
            else { // 가장 위에 있는 정수를 빼고 그 수를 출력 / 정수가 없을경우 -1을 출력
                result[result.length] = stack[stack.length - 1]
                stack.length = stack.length-1
            }
            break;

        case 'size':
            result[result.length]= stack.length
            break;

        case 'top':
            if (stack.length == 0) {
                result[result.length] = -1
            }
            else {
                result[result.length] = stack[stack.length - 1]
            }
            break;
        case 'empty':
            if (stack.length == 0) {
                result[result.length]=1
            } else {
                result[result.length]=0
            }
            break;
        default:
            stack[stack.length]=(input[i].split(' ')[1])
            break;
    }
}
console.log(result.join('\n'));