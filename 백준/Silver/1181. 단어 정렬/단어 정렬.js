let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

let setarr = [...new Set(input)];

setarr.shift();

let result = setarr.sort().sort((a, b) => a.length - b.length);

result.forEach((element,index,value) => {
    console.log(value[index])
});