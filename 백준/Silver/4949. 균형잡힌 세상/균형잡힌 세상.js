const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((x) => x.replace('\r', ''));

// console.log(input)
for (let i = 0; i < input.length; i++) {
    let stack = [];
    let result = [];
    for (let j = 0; j < input[i].length; j++) {
        stack.push(input[i][j])
    }
    if (stack == '.') {
        break;
    } else {
        for (let k = 0; k < stack.length; k++) {
            if (stack[k] == ('(') || stack[k] == (')') || stack[k] == ('[') || stack[k] == (']')) {
                result.push(stack[k])
                // console.log(result)
                for (let l = 0; l < result.length; l++) {
                    if ((result[l] == ('(') && result[l + 1] == (')')) || (result[l] == ('[') && result[l + 1] == (']'))) {
                        result.pop()
                        result.pop()
                    }
                }
            }
        }
        if (result.length == 0) {
            console.log('yes')
        } else {
            console.log('no')
        }
    }
}