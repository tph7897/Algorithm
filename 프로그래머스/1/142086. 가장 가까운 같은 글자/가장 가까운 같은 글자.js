function solution(s) {
    let object = {}
    let answer = [];
    for(let i = 0 ; i < s.length ; i++){
        if(object[s[i]] == 0 || object[s[i]]){
            answer.push(i-object[s[i]])
            object[s[i]] = i
        }else {
            answer.push(-1)
            object[s[i]] = i
        }
    }
    return answer;
}