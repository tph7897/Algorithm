function solution(k, score) {
    var answer = [score[0]];
    for(let i = 1 ; i < score.length ; i++){
        if(i < k - 1){
            answer.push(Math.min(...score.slice(0 , i+1)));
        }else{
            answer.push((score.slice(0 , i+1).sort((a,b)=>b-a)[k-1]));
        }
    }
    return answer;
}