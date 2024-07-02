let i = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').sort((a,b)=>(a-b)).map(Number)
console.log(`${i.reduce((a,c)=>a+c)/5}\n${i[2]}`)