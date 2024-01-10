function solution(a, b) {
    var count = 0;
    let answer = 0
    if(a%2) count++
    if(b%2) count++
    if(count == 2) answer = a**2 + b**2
    else if(count == 1) answer = 2* (a + b)
    else if(count == 0) answer = Math.abs(a - b)
    return answer;
}