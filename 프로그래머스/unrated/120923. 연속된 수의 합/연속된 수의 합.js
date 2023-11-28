function solution(num, total) {
    var answer = [];
    let sum = 0;
    for(let i = 1 ; i< num ; i++){
        sum += i
    }
    let firstNum = (total - sum)/num
    for(let j = 0 ; j< num ; j++){
        answer.push(firstNum+j)
    }
    return answer;
}