function solution(n) {
    var answer = [];
    let i = 2
    while(n>=2){
        if(n%i == 0){
            n /= i
            answer.push(i)
        }else{
            i++
        }
    }
    return [...new Set(answer)]
}