function solution(n, words) {
    const arr = [...new Set(words)]
    var answer = [];
    let count = 1
    for(let i = 1 ; i < words.length ; i++){
        if(arr[i]!=words[i] || words[i-1][words[i-1].length-1] != words[i][0]){
            break
        }
        count++
    }
    if(count == words.length){
        answer = [0,0]
    }else{
        answer = [count%n+1, Math.ceil((count+1)/n)]
    }
    return answer;
}