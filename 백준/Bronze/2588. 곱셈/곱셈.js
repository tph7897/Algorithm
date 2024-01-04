var [a, b] = require('fs').readFileSync('/dev/stdin').toString().split("\n")
const A = +a * +b[2]
const B = +a * +b[1]
const C = +a * +b[0]
console.log(A);
console.log(B);
console.log(C);
console.log((100*C)+(10*B)+A);
