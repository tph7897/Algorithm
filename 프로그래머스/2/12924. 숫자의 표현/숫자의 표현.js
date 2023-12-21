function solution(n) {
    var answer = 0;
    for(let i = 1 ; i <= n ; i++){
        const remainingStones = n-i*(i-1)/2
        if(remainingStones > 0 && remainingStones%i == 0)answer++
    } 
    return answer;
}