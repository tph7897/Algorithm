function solution(n) {
    var answer = 0;
    for(let i = 1 ; i <= n**(1/2) ; i++){
        if(i*i==n){
            answer++
        }else if(n%i==0){
            answer += 2
        }
    }
    return answer;
}