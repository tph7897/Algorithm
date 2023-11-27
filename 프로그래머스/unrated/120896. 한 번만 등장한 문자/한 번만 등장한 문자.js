function solution(s) {
    var answer = [];
    for(let i = 0 ; i < s.length ; i++){
        if(s.split(s[i]).length == 2){
            answer.push(s[i])
        }
    }
    return answer.sort().join('');
}