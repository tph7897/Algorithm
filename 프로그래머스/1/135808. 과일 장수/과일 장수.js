function solution(k, m, score) {
    score.sort((a,b)=>b-a)
    var answer = 0;
    for(let i = m-1 ; i < score.length ; i += m){
        answer += m*score[i]
    }
    return answer;
}