const getDivisors = (num) => {
    let divisors = 0;
    for(let i = 1 ; i <= Math.sqrt(num) ; i++){
        if(num % i === 0) {
            divisors ++;
            if(num / i != i) divisors ++;
        }
    }
    return divisors;
}

function solution(number, limit, power) {
    var answer = 0;
    for(let i = 1 ; i <= number ; i++){
        answer += getDivisors(i)>limit ? power : getDivisors(i)
    }
    return answer;
}