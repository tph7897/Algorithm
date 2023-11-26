var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);

let answer = 0;

while(true){
 if(a % 5 !== 0){
    a -= 3
    answer++ 
 }

 else if(a % 5 === 0){    // a가 5로 나누어져서 나머지 값이 0이라면
    answer = answer + a / 5 // answer = 3
    break;
}

if(a < 0){
    answer = -1
    break;
    }
}

console.log(answer)