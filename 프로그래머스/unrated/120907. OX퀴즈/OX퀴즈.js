function solution(quiz) {
    var answer = [];
    for(let i = 0 ; i < quiz.length ; i++){
        let arr = quiz[i].split('=')
        eval(arr[0]) == +arr[1] ? answer.push('O') : answer.push('X')
    }
    return answer;
}