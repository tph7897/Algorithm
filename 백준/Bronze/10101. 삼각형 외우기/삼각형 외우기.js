let input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
const a = parseInt(input[0])
const b = parseInt(input[1])
const c = parseInt(input[2])
const sum = a+b+c
if(sum==180){
    if(a==60 && b==60 && c==60) console.log("Equilateral")
    else if(a==b || b==c || a==c) console.log("Isosceles")
    else console.log("Scalene")
}
else console.log("Error")