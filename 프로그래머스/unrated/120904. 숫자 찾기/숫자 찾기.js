function solution(num, k) {
    var answer = num.toString().indexOf(k)
    return answer>=0 ? answer+1: answer;
}