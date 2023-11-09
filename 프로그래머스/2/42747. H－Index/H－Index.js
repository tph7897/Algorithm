function solution(citations) {
    let answer = 0
    let count = 0
    citations.sort((a,b)=>b-a)
    for(let i= 0; i<citations.length; i++){
    count++
        if(citations[i]<count){
            break
        }
        answer++
    }
    return answer;
}