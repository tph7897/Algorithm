function solution(myString, pat) {
    var answer = 0;
    for(let i = 0 ; i <= myString.length - pat.length ; i++){
        if(myString.slice(i).startsWith(pat)) answer++
    }
    return answer;
}