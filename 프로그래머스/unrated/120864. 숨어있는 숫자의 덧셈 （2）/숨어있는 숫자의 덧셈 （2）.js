function solution(my_string) {
    var answer = 0;
    let newStr = my_string.split(/[a-zA-Z ]/).filter(Boolean)
    for(let i = 0; i<newStr.length; i++){
        answer += Number(newStr[i])
    }
    return answer;
}