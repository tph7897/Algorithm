function solution(s){
    var answer = 0;
    if(s.length%2 == 1){
         return false
    }else{
        for(let i = 0 ; i < s.length ; i++){
            s[i] == '(' ? answer++ : answer--
            if(answer < 0) break
        }
        return answer? false : true 
    }
}