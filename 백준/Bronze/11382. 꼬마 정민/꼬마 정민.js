var input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ").map(e=>parseInt(e))
const [a, b, c]=input
console.log(a+b+c)