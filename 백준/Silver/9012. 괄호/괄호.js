const fs = require('fs')
let [n, ...input] = fs.readFileSync('/dev/stdin').toString().split('\n').map((x) => x.replace('\r', ''));

for(let i =0 ; i< n; i++){
    const PS = input[i]
    let stack = 0;
    for(let j = 0; j< PS.length; j++){
        PS[j] == '(' ? stack++ : stack--;
        if(stack < 0){
            break;
        }
    }
    stack == 0 ? console.log("YES") : console.log("NO")
    stack = 0
}