function solution(s) {
    var answer = 0;
    let str = s[0]
    let count = 0
    for(let i = 0 ; i < s.length ; i++){
        if(count === 0)str = s[i]
        s[i] == str ? count++ : count--
        if(count === 0)answer++
        if(i== s.length-1 && count != 0)answer++
    }
    return answer;
}