const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [a,b] = input.shift().split(' ').map(e=>parseInt(e));

function isPrime(n){ 
    if(n === 1) 
        return false;
    for(let i = 2 ; i <= Math.sqrt(n); i++){
        if((n%i)===0) return false;
    }
    return true;
}

for(let i=a; i<= b; i++){
    isPrime(i) ? console.log(i) : null;            
}