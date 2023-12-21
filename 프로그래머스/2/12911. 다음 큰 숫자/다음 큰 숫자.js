function solution(n) {
    var answer = n+1;
    const BinaryN = n.toString(2).split('1').length-1
    while(answer.toString(2).split('1').length-1 !== BinaryN){
        answer++
    }
    return answer;
}