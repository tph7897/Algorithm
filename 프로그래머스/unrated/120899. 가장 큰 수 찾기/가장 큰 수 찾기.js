function solution(array) {
    let MaxNum = Math.max(...array)
    let MaxIndex = array.indexOf(MaxNum);
    var answer = [MaxNum, MaxIndex];
    return answer;
}