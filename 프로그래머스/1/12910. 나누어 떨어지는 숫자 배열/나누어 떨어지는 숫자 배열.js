function solution(arr, divisor) {
    var answer = [];
    arr.forEach((e)=> e%divisor? 0 :answer.push(e))
    console.log(answer.length)
    return answer.length?answer.sort((a,b)=>a-b):[-1]
}