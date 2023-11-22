function solution(i, j, k) {
    var answer = 0;
    for(let n = i ; n<= j; n++){
        answer += n.toString().split(k).length - 1
    }
    return answer;
}