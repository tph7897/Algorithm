function solution(n) {
    let x = n
    var answer = 0
    while(x > 1){
        if(n%x == 1){
            answer = x
        }
        x--
    };
    return answer;
}