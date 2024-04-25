const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
for (let i = 0 ; i < input.length -1 ; i++) {
    console.log(+input[i].split(' ')[0] + +input[i].split(' ')[1]);
}