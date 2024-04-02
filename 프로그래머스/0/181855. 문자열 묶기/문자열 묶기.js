function solution(strArr) {
    let arr = new Array(30).fill(0);
    strArr.forEach(e => arr[e.length-1]++);
    return Math.max(...arr);
    return arr
}