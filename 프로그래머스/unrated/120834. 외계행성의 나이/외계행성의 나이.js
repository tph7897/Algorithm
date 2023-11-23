function solution(age) {
    let PROGRAMMERS = 'abcdefghij'
    age = age.toString();
    let answer = "";
    for(let i = 0 ; i<age.length ; i++){
        answer += PROGRAMMERS[age[i]]
    }
    return answer;
}