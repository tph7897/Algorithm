function solution(s){
    var answer = 0;
        for(let i = 0 ; i < s.length ; i++){
            s[i] == '(' ? answer++ : answer--
            if(answer < 0) break
        }
    return answer ? false : true 
}