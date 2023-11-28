function solution(s) {
    let arr = s.split(' ')
    var answer = 0;
    for(let i = 0 ; i < arr.length ; i++){
        arr[i] != "Z" ? answer += +arr[i] : answer -= +arr[i-1]
    }
    return answer;
}